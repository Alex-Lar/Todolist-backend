import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async create(todo: string): Promise<void> {
    const newTodo = this.todosRepository.create({
      description: todo,
      isComplete: false,
    });

    await this.todosRepository.save(newTodo);
  }

  async findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async findOne(id: string): Promise<Todo | null> {
    return this.todosRepository.findOneBy({ id });
  }

  async removeOne(id: string): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
