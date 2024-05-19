import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityResolver } from './community.resolver';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { DatabaseService } from 'src/engine/database/database.service';

@Module({
  providers: [CommunityResolver, CommunityService, AuthGuard, DatabaseService],
})
export class CommunityModule {}
