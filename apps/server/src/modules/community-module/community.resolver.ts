import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CommunityService } from './community.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { CommunitySchema } from 'src/engine/models/community.models';
import { GqlContext } from 'src/core/config/gql';
import { BaseUserObject } from 'src/engine/models/user.models';

@Resolver()
export class CommunityResolver {
  constructor(private communityService: CommunityService) {}

  @Mutation(() => CommunitySchema)
  @UseGuards(AuthGuard)
  async createCommunity(
    @Args('name', { type: () => String }) communityName: string,
    @Args('hashtag', { type: () => String }) hashtag: string,
    @Context(GqlContext.user) user: BaseUserObject,
  ) {
    return await this.communityService.createCommunity({
      userId: user.id,
      communityName,
      hashtag,
    });
  }
}
