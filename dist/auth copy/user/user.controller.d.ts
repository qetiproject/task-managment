import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/user.entity").User[]>;
    update(updateUserDTO: UpdateUserDto, userId: number): Promise<import("typeorm").UpdateResult>;
    getUser(userId: number): Promise<import("./entity/user.entity").User>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
}
