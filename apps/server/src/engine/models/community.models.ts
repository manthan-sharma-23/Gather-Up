import { Field, ObjectType } from '@nestjs/graphql';
import { MinLength, IsDate } from 'class-validator';

@ObjectType()
export class CommunitySchema {
  @Field()
  @MinLength(3)
  name: string;

  @Field({ nullable: true })
  @MinLength(2)
  hashtag: string;

  @Field({ nullable: true })
  @IsDate()
  createdAt?: Date;

  @Field({ nullable: true })
  @IsDate()
  updatedAt?: Date;
}
