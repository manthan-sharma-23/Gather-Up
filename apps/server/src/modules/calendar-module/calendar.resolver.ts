import { Injectable } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Injectable()
export class CalendarResolver {
  constructor(private calendarService: CalendarService) {}
}
