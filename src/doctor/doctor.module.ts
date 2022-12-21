import { Module } from '@nestjs/common';
import { DoctorController } from './controller/doctor.controller';
import { DoctorService } from './service/doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './entity/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorEntity])],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
