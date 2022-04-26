import { Controller, Get } from '@nestjs/common';
import { PublisherService, UserCreateCommand } from 'example-application';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private publiserService: PublisherService) { }

  @Get()
  getHello(): string {
    this.publiserService.publish(new UserCreateCommand());
    return "";
  }
}
