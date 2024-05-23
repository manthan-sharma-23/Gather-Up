import { Field, ID, ObjectType } from '@nestjs/graphql';

export interface BaseUserObject {
  id: string;
  email: string;
}

export interface MinimalUserObject extends BaseUserObject {
  name: string;
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  hashedPassword?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  mergedCalendarId?: number;

  @Field({ nullable: true })
  userCalenderId?: string;
}
