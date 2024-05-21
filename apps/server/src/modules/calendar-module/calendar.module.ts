import { Module } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { DatabaseService } from 'src/engine/database/database.service';

@Module({
  imports: [DatabaseService, AuthGuard],
})
export class CalendarModule {}
