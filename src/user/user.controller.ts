import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    activeUsers(): string[] {
        return ['User1', 'User2', 'User3'];
    }
}
