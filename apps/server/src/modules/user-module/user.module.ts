import { Module } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { DatabaseService } from 'src/engine/database/database.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [DatabaseService, AuthGuard, UserResolver, UserService],
})
export class UserModule {}
