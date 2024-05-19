import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { DatabaseService } from '../database/database.service';

@Module({
  providers: [AuthService, AuthGuard, AuthResolver, DatabaseService],
  imports: [],
})
export class AuthModule {}
