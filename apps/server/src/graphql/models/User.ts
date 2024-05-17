import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  displayName: string;

  @Field(() => [Post], { nullable: 'items' })
  posts: [Post];
}

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  post: string;

  @Field(() => Int)
  authorId: number;
}
