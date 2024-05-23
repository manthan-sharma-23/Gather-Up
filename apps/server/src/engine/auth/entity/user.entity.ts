import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  hashedPassword: string;
}
