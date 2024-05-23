import { Context, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { BaseUserObject, User } from 'src/engine/models/user.models';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { GqlContext } from 'src/core/config/gql';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  @UseGuards(AuthGuard)
  async user(@Context(GqlContext.user) user: BaseUserObject) {
    return await this.userService.getUser(user);
  }
}
