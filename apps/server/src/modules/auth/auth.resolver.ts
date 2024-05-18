import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { HelloDto } from './dto/hello.dto';
import { SignOutputDto } from './dto/sign-output.dto';
import { SignInputArgs } from './args/sign-arg';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/authorize.guard';
import { User } from './entity/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => HelloDto)
  hello(): HelloDto {
    return { hello: 'new' };
  }

  @Mutation(() => SignOutputDto)
  async signup(
    @Args('SignInputArgs') arg: SignInputArgs,
  ): Promise<SignOutputDto> {
    return await this.authService.signUp(arg);
  }

  @Mutation(() => SignOutputDto)
  async signin(
    @Args('SignInputArgs') arg: SignInputArgs,
  ): Promise<SignOutputDto> {
    return await this.authService.signIn(arg);
  }

  @Query(() => User)
  @UseGuards(AuthGuard)
  async getUser(@Context('user') user: any): Promise<string> {
    return JSON.stringify(user);
  }
}
