import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { EventService } from './event.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { CreateEventInput } from './dtos/createEventFromPersonal.dto';
import { GqlContext } from 'src/core/config/gql';
import { BaseUserObject } from 'src/engine/models/user.models';
import { Event } from 'src/engine/models/Event.models';

@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  @UseGuards(AuthGuard)
  async createEventFromPersonal(
    @Args('CreateEventInput') arg: CreateEventInput,
    @Context(GqlContext.user) userCtx: BaseUserObject,
  ): Promise<Event> {
    return await this.createEventFromPersonal(arg, userCtx);
  }

  @Mutation(() => Event)
  @UseGuards(AuthGuard)
  async createEventFromCommunity(
    @Args('CreateEventInput') arg: CreateEventInput,
    @Context(GqlContext.user) userCtx: BaseUserObject,
  ): Promise<Event> {
    return await this.createEventFromCommunity(arg, userCtx);
  }
}
