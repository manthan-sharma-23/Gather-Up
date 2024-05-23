import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
  PreconditionFailedException,
} from '@nestjs/common';
import { DatabaseService } from '../../engine/database/database.service';
import { SignInputArgs } from './args/sign-arg';
import { SignOutputDto } from './dto/sign-output.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from 'src/core/config/env';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  public async signUp(arg: SignInputArgs): Promise<SignOutputDto> {
    const { email, name, password } = arg;

    try {
      const findUserQuery = await this.databaseService.user.findUnique({
        where: {
          email,
        },
      });

      if (findUserQuery) {
        throw new PreconditionFailedException('Resource Already Exists');
      }

      const salt = (await bcrypt.genSalt(10)) || 'pokemonism';
      const hashedPassword = await bcrypt.hash(password, salt);

      const createUserQuery = await this.databaseService.user.create({
        data: {
          email,
          name,
          hashedPassword,
        },
      });

      await this.createCalenders({
        userId: createUserQuery.id,
      });

      // if (!calender) throw new GoneException();

      const token = this.constructJwtAccessToken(
        createUserQuery.id,
        createUserQuery.email,
        SECRET_KEY,
      );

      return { token };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Something Bad Happened', {
        cause: new Error(error),
        description: error,
      });
    }
  }

  public async signIn(arg: SignInputArgs): Promise<SignOutputDto> {
    const { email, password } = arg;

    try {
      const findUserQuery = await this.databaseService.user.findUnique({
        where: {
          email,
        },
      });

      if (!findUserQuery) {
        throw new NotFoundException('Resource Doesnot Exists Please Signup');
      }

      const IsPassswordCorrect = await this.checkPassword(
        password,
        findUserQuery.hashedPassword,
      );

      if (!IsPassswordCorrect)
        throw new NotAcceptableException('Incorrect Credentials');

      const token = this.constructJwtAccessToken(
        findUserQuery.id,
        findUserQuery.email,
        SECRET_KEY,
      );

      return { token };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Something Bad Happened', {
        cause: new Error(error),
        description: error,
      });
    }
  }

  private async createCalenders({ userId }: { userId: string }) {
    const userCalender = await this.databaseService.userCalender.create({
      data: {
        userId,
      },
    });

    if (!userCalender) return false;

    const mergedCalender = await this.databaseService.mergedCalendar.create({
      data: {
        userId,
        userCalenders: {
          connect: {
            id: userCalender.id,
          },
        },
      },
    });

    if (!mergedCalender) return false;

    const userCalenderPopulation = await this.databaseService.user.update({
      where: {
        id: userId,
      },
      data: {
        userCalenderId: userCalender.id,
        mergedCalendarId: mergedCalender.id,
      },
    });

    if (userCalenderPopulation) return true;

    return false;
  }

  private constructJwtAccessToken(id: string, email: string, secret: string) {
    return jwt.sign({ id, email }, secret);
  }

  private async checkPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
