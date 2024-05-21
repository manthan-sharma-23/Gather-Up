import {
  ConflictException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { DatabaseService } from '../../engine/database/database.service';
import { CommunitySchema } from 'src/engine/models/community.models';

@Injectable()
export class CommunityService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createCommunity(args: {
    userId: string;
    communityName: string;
    hashtag: string;
  }): Promise<CommunitySchema> {
    const { userId, communityName, hashtag } = args;

    if (!communityName || !hashtag || !userId) {
      throw new NotAcceptableException();
    }
    const hashtagCheck = await this.databaseService.community.findUnique({
      where: {
        hashtag,
      },
    });

    if (hashtagCheck)
      throw new ConflictException('Hashtag Already Used By someone');

    const createCommunityQuery = await this.databaseService.community.create({
      data: {
        createdBy: userId,
        name: communityName,
        hashtag,
      },
    });

    await this.databaseService.communityCalender.create({
      data: {
        communityId: createCommunityQuery.id,
      },
    });

    await this.databaseService.communityUser.create({
      data: {
        communityId: createCommunityQuery.id,
        userId,
        role: 'ADMIN',
      },
    });

    return createCommunityQuery;
  }
}
