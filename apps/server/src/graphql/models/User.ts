import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((_) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  displayName: string;
}
