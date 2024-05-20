import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from '../../engine/database/database.service';
import { CreateEventInput } from './dtos/createEventFromPersonal.dto';
import {
  Event,
  EventRoles,
  EventScope,
  EventStatus,
} from 'src/engine/models/Event.models';
import { BaseUserObject } from 'src/engine/models/user.models';

@Injectable()
export class EventService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createEventFromPersonal(
    args: CreateEventInput,
    ctx: BaseUserObject,
  ): Promise<Event> {
    const { name, description, status, startedAt, endAt, scope, location } =
      args;
    const { id, email } = ctx;

    if (!id && !email) throw new UnauthorizedException();

    const createEventQuery = await this.databaseService.event.create({
      data: {
        name,
        description,
        startedAt,
        endAt,
        status: status as EventStatus,
        scope: scope as EventScope,
        location,
        userId: id,
        communityId: null,
      },
    });

    await this.databaseService.eventParticipant.create({
      data: {
        userId: id,
        role: EventRoles.HOST,
        eventId: createEventQuery.id,
      },
    });

    return createEventQuery;
  }

  async createEventFromCommunity(
    args: CreateEventInput,
    ctx: BaseUserObject,
  ): Promise<Event> {
    const {
      name,
      description,
      status,
      startedAt,
      endAt,
      scope,
      location,
      communityId,
    } = args;
    const { id, email } = ctx;

    if (!id && !email) throw new UnauthorizedException();

    const createEventQuery = await this.databaseService.event.create({
      data: {
        name,
        description,
        startedAt,
        endAt,
        status: status as EventStatus,
        scope: scope as EventScope,
        location,
        communityId,
        userId: id,
      },
    });

    await this.databaseService.eventParticipant.create({
      data: {
        userId: id,
        role: EventRoles.HOST,
        eventId: createEventQuery.id,
      },
    });

    return createEventQuery;
  }
}
