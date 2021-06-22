import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLabsDto } from './dto/create-labs.dto';
import { UpdateLabsDto } from './dto/update-labs.dto';
import { Labs, LabsDocument } from './schemas/labs.schema';

@Injectable()
export class LabsService {
    constructor(@InjectModel(Labs.name) private readonly model: Model<LabsDocument>) {}

    async findAll(): Promise<Labs[]> {
        return await this.model.find().exec();
      }

    
  async findOne(id: string): Promise<Labs> {
    return await this.model.findById(id).exec();
  }

  async create(createLabsDto: CreateLabsDto): Promise<Labs> {
    return await new this.model({
      ...createLabsDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateLabsDto: UpdateLabsDto): Promise<Labs> {
    return await this.model.findByIdAndUpdate(id, updateLabsDto).exec();
  }

  async delete(id: string): Promise<Labs> {
    return await this.model.findByIdAndDelete(id).exec();
  }

}
