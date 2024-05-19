import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateInviteOutput {
  @Field()
  message: string;

  @Field(() => Int)
  inviteId: number;
}
