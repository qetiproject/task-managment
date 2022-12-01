import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
}
