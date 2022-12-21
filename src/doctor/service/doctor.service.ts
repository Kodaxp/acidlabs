import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from '../entity/doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(DoctorEntity)
    private readonly doctorRepository: Repository<DoctorEntity>,
  ) {}

  health(): string {
    return 'health doctor';
  }

  async create(doctor: any) {
    await this.doctorRepository.insert(doctor);
    return { create: 'success', doctor };
  }
}
