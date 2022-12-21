import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { DoctorService } from '../service/doctor.service';
import {ApiBody, ApiParam} from "@nestjs/swagger";
import {DoctorEntity} from "../entity/doctor.entity";

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get()
  healthcheck() {
    return this.doctorService.health();
  }

  @ApiBody({
    type: DoctorEntity
  })
  @Post('/create-new-doctor')
  async createDoctor(@Body() doctorReq: DoctorEntity) {
    return await this.doctorService.create(doctorReq);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
    example: '1'
  })
  @Get('/find-doctor/:id')
  async findDoctor(@Param() params) {
    return await this.doctorService.find(params.id);
  }

  @Get('/find-doctors')
  async findAllDoctors() {
    return await this.doctorService.findAll();
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
    example: '1'
  })
  @ApiBody({
    type: DoctorEntity
  })
  @Put('/update-doctor/:id')
  async updateDoctor(@Param() params, @Body() doctorReq: DoctorEntity) {
    return await this.doctorService.update(params.id, doctorReq);
  }

  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
    example: '1'
  })
  @Delete('/delete-doctor/:id')
  async deleteDoctor(@Param() params) {
    return await this.doctorService.delete(params.id);
  }
}
