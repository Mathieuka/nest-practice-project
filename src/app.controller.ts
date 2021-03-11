import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/boom')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/da')
  getHello(): string {
    return this.appService.getHello();
  }
}
