import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateLabsDto } from './dto/create-labs.dto';
import { UpdateLabsDto } from './dto/update-labs.dto';
import { LabsService } from './labs.service';

@Controller('api')
export class LabsController {
    constructor(private readonly labsService: LabsService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('/labs')
  async index() {
    return await this.labsService.findAll();
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/lab/:id')
  async find(@Param('id') id: string) {
    return await this.labsService.findOne(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Post('/addlab')
  async create(@Body() createLabsDto: CreateLabsDto) {
    return await this.labsService.create(createLabsDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() updateLabsDto: UpdateLabsDto) {
     await this.labsService.update(id, updateLabsDto);

     return ({"message":"Lab Updated successfully!"})
  } 

  //@UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
     await this.labsService.delete(id);
     return ({"message":"Lab Deleted successfully!"})
  }
  
}
