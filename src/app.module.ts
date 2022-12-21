import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './doctor/entity/doctor.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: 'secret',
        database: 'doctors',
        entities: [DoctorEntity],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    DoctorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
