import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
export declare class TasksRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
