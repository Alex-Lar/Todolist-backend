import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) { }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<void> {
    const { todo } = createTodoDto;
    this.todoService.create(todo);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Delete(':id')
  async removeOne(@Param('id') id: string): Promise<void> {
    return this.todoService.removeOne(id);
  }
}
