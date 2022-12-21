import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
