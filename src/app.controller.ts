import { Controller, Get, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Todo) private todoRepo: Repository<Todo>,
  ) {}

  @Get()
  @Render('index')
  async index() {
    const todos = await this.todoRepo.find();
    return { todo: todos[0] };
  }
}
