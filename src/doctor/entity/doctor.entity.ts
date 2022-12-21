import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'doctor', schema: 'public' })
export class DoctorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rut: string;

  @Column()
  nombre: string;

  @Column()
  apellido_paterno: string;

  @Column()
  apellido_materno: string;

  @Column()
  especialidad: string;

  @Column()
  lugar_de_trabajo: string;
}
