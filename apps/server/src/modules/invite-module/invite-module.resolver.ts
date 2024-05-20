import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { InviteModuleService } from './invite-module.service';
import { CreateInviteOutput } from './dto/create-invite.output';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { CreateInviteInput } from './dto/create-invite.input';
import { GqlContext } from 'src/core/config/gql';
import { BaseUserObject } from 'src/engine/models/user.models';

@Resolver()
export class InviteModuleResolver {
  constructor(private readonly inviteModuleService: InviteModuleService) {}

  @Mutation(() => CreateInviteOutput)
  @UseGuards(AuthGuard)
  async createCommunityInvite(
    @Args('CreateInviteInput') input: CreateInviteInput,
    @Context(GqlContext.user) user: BaseUserObject,
  ) {
    return await this.inviteModuleService.createCommunityInvite({
      userId: input.userId,
      communityId: input.communityId,
      admin: user,
    });
  }

  
}
