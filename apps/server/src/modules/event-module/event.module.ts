import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/engine/database/database.service';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { EventResolver } from './event.resolver';
import { EventService } from './event.service';

@Module({
  providers: [DatabaseService, AuthGuard, EventResolver, EventService],
})
export class EventModule {}
