import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { HelloDto } from './dto/hello.dto';
import { SignOutputDto } from './dto/sign-output.dto';
import { SignInputArgs } from './args/sign-arg';

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
    console.log(arg);
    return await this.authService.signIn(arg);
  }
}
