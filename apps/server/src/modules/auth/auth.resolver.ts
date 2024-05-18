import { Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { HelloDto } from './dto/hello.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
  ) {}

  @Query(() => HelloDto)
  hello(): HelloDto {
    return { hello: 'new' };
  }
}
