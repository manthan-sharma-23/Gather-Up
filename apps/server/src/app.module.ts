import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { DatabaseService } from './engine/database/database.service';
import { AuthModule } from './engine/auth/auth.module';
import { CommunityModule } from './modules/community-module/community.module';
import { InviteModule } from './modules/invite-module/invite-module.module';
import { EventModule } from './modules/event-module/event.module';
import { UserModule } from './modules/user-module/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/engine/gql/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    AuthModule,
    CommunityModule,
    InviteModule,
    EventModule,
    UserModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
