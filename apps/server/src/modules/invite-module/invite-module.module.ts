import { Module } from '@nestjs/common';
import { InviteModuleService } from './invite-module.service';
import { InviteModuleResolver } from './invite-module.resolver';
import { DatabaseService } from 'src/engine/database/database.service';
import { AuthGuard } from 'src/core/guards/authorize.guard';

@Module({
  providers: [
    InviteModuleResolver,
    InviteModuleService,
    DatabaseService,
    AuthGuard,
  ],
})
export class InviteModule {}
