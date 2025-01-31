import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    activeUsers(): string[] {
        return ['User1', 'User2', 'User3'];
    }
}
