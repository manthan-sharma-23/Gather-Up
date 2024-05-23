import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class SignInputArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  @MinLength(3)
  password: string;
}
