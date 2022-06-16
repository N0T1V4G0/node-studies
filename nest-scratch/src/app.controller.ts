import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getMessage(): string {
    return 'sup w0lrd!1!';
  }

  @Get('/:id')
  getOtherMessage(): string {
    return 'other message';
  }
}
