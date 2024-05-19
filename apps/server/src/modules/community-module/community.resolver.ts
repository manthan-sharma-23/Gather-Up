import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { CommunityService } from './community.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { DatabaseService } from '../../engine/database/database.service';
import { CommunitySchema } from 'src/engine/models/community.models';
import { User } from 'src/engine/auth/entity/user.entity';
import { GqlContext } from 'src/core/config/gql';

@Resolver()
export class CommunityResolver {
  constructor(private communityService: CommunityService) {}

  @Mutation(() => CommunitySchema)
  @UseGuards(AuthGuard)
  async createCommunity(
    @Args('name', { type: () => String }) communityName: string,
    @Args('hashtag', { type: () => String }) hashtag: string,
    @Context(GqlContext.user) user: any,
  ) {
    return await this.communityService.createCommunity({
      userId: user.id,
      communityName,
      hashtag,
    });
  }
}
