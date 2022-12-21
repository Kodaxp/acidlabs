import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity({ name: 'doctor', schema: 'public' })
export class DoctorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({type: 'string', example:'12345678-9'})
  @Column()
  rut: string;

  @ApiProperty({type: 'string', example:'Joel'})
  @Column()
  nombre: string;

  @ApiProperty({type: 'string', example:'Zúñiga'})
  @Column()
  apellido_paterno: string;

  @ApiProperty({type: 'string', example:'Moncada'})
  @Column()
  apellido_materno: string;

  @ApiProperty({type: 'string', example:'oftalmología'})
  @Column()
  especialidad: string;

  @ApiProperty({type: 'string', example:'Ioares'})
  @Column()
  lugar_de_trabajo: string;
}
