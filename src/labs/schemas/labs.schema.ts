import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LabsDocument = Labs & Document;

@Schema()
export class Labs {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const LabsSchema = SchemaFactory.createForClass(Labs);
