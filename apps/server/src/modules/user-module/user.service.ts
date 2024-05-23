import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/engine/database/database.service';
import { BaseUserObject } from 'src/engine/models/user.models';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getUser(user: BaseUserObject) {
    const getUserQuery = await this.databaseService.user.findFirst({
      where: {
        id: user.id,
      },
    });

    return getUserQuery;
  }
}
