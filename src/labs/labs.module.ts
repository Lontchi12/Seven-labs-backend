import { Module } from '@nestjs/common';
import { LabsService } from './labs.service';
import { LabsController } from './labs.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Labs, LabsSchema } from './schemas/labs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Labs.name, schema: LabsSchema }]),
  ],
  providers: [LabsService],
  controllers: [LabsController]
})
export class LabsModule {}
