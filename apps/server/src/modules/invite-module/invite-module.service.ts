import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { DatabaseService } from '../../engine/database/database.service';
import { CreateInviteOutput } from './dto/create-invite.output';
import { BaseUserObject } from 'src/engine/models/user.models';

@Injectable()
export class InviteModuleService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createCommunityInvite(args: {
    userId: string;
    communityId: string;
    admin: BaseUserObject;
  }): Promise<CreateInviteOutput> {
    const { userId, communityId, admin } = args;
    const adminId = admin.id;

    const checkAdminQuery = await this.databaseService.communityUser.findFirst({
      where: {
        userId: adminId,
        communityId,
      },
    });

    if (!checkAdminQuery || checkAdminQuery.role !== 'ADMIN') {
      throw new UnauthorizedException(
        'Request Not Acccepted User is not an admin',
      );
    }

    const createInviteForCommunity =
      await this.databaseService.communityInvite.create({
        data: {
          userId,
          communityId,
        },
      });

    if (!createInviteForCommunity) throw new InternalServerErrorException();

    return {
      message: 'invite created successfully',
      inviteId: createInviteForCommunity.id,
    };
  }
}
