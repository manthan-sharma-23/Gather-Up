import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloDto {
  @Field()
  hello: string;
}
