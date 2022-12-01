import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { JwtPayload } from './dto/jwt-payload.interface';
import { User } from './user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: Repository<User>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
