import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { DatabaseService } from './engine/database/database.service';
import { AuthModule } from './engine/auth/auth.module';
import { CommunityModule } from './modules/community-module/community.module';
import { InviteModule } from './modules/invite-module/invite-module.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/engine/gql/schema.gql'),
    }),
    AuthModule,
    CommunityModule,
    InviteModule,
  ],

  providers: [DatabaseService],
})
export class AppModule {}
