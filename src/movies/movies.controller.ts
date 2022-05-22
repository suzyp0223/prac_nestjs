import { Controller, Get, Query } from '@nestjs/common';

@Controller('/')
export class MoviesController {
  @Get('hello')
  hello(@Query('name') searchingName: string) {
    return `Searching for a Name like: ${searchingName}`;
  }
}
