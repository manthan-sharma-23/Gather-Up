import { Resolver } from '@nestjs/graphql';
import { DatabaseService } from '../../engine/database/database.service';

@Resolver()
export class CalendarService {
  constructor(private readonly databaseService: DatabaseService) {}
}
