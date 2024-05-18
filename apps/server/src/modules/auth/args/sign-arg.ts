import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInputArgs {
  @Field()
  email: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  password: string;
}
