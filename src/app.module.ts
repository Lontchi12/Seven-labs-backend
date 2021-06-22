import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LabsModule } from './labs/labs.module';
//import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [LabsModule, AuthModule,
    MongooseModule.forRoot('mongodb://localhost/seven-labs')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
