import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { DoctorService } from '../service/doctor.service';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get()
  healthcheck() {
    return this.doctorService.health();
  }

  @Post('/create-new-doctor')
  async createDoctor(@Body() doctorReq: any) {
    return await this.doctorService.create(doctorReq);
  }

  @Get('/find-doctor/:id')
  async findDoctor(@Param() params) {
    return await this.doctorService.find(params.id);
  }

  @Get('/find-doctors')
  async findAllDoctors() {
    return await this.doctorService.findAll();
  }

  @Put('/update-doctor/:id')
  async updateDoctor(@Param() params, @Body() doctorReq: any) {
    return await this.doctorService.update(params.id, doctorReq);
  }

  @Delete('/delete-doctor/:id')
  async deleteDoctor(@Param() params) {
    return await this.doctorService.delete(params.id);
  }
}
