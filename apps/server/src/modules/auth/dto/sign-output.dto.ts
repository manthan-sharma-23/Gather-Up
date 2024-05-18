import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignOutputDto {
  @Field()
  token: string;
}

