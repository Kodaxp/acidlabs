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

  async find(id: any) {
    return await this.doctorRepository.findOne({ where: { id } });
  }

  async findAll() {
    return await this.doctorRepository.find();
  }

  async update(id: number, doctor: any) {
    await this.doctorRepository.update(id, doctor);
    return {
      update: 'success',
      doctor
    }
  }

  async delete(id: number) {
    await this.doctorRepository.delete(id);
    return {
      delete: 'success'
    }
  }
}
