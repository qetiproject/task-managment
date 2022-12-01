import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    get(): Promise<User[]>;
    update(updateUserDTO: UpdateUserDto, userId: number): Promise<import("typeorm").UpdateResult>;
    show(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    delete(userId: number): Promise<import("typeorm").DeleteResult>;
}
