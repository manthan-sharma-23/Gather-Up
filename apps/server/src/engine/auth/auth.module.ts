import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

import { DatabaseService } from '../database/database.service';

@Module({
  providers: [AuthService, AuthResolver, DatabaseService],
  imports: [],
})
export class AuthModule {}
