import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { DatabaseService } from 'src/engine/database/database.service';
import { AuthGuard } from 'src/core/guards/authorize.guard';

@Module({
  providers: [AuthService, DatabaseService, AuthGuard, AuthResolver],
  imports: [],
})
export class AuthModule {}
