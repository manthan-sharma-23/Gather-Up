import { Args, Int, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { User } from '../models/User';

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

@Resolver()
export class UserResolver {
  @Query(() => [User])
  getUsers() {
    return users;
  }

  @Query(() => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return users.find((user) => user.id === id);
  }
}
