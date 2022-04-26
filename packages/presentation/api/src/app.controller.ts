import { Mediator } from '@extrimian/core';
import { Controller, Get } from '@nestjs/common';
import { UserCreateCommand } from 'example-application';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private mediator: Mediator) { }

  @Get()
  async getHello(): Promise<number> {
    return await this.mediator.send(new UserCreateCommand("New user"));
  }
}
