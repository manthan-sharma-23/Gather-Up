import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
} from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Post, User } from '../models/User';

const users = [
  {
    id: 1,
    name: 'Manthan',
    displayName: 'ManthanNew',
  },
  {
    id: 2,
    name: 'Dupen',
    displayName: 'Dupenzz',
  },
  {
    id: 3,
    name: 'Sawraj',
    displayName: 'Sawrajs',
  },
];

const posts = [
  {
    id: 1,
    post: 'Hey there',
    authorId: 2,
  },
];

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  getUsers() {
    return users;
  }

  @Query(() => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return users.find((user) => user.id === id);
  }

  @ResolveField('posts', () => [Post])
  getposts(@Parent() user: User) {
    const { id } = user;
    return posts.filter((post) => post.authorId === id);
  }

  @Mutation(() => Post)
  addPost() {}
}
