import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString } from 'class-validator';


@InputType()
export class CreateEventInput {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  startedAt?: Date = new Date();

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  endAt?: Date;

  @Field()
  scope: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  location?: string;

  @Field()
  status: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  communityId?: string;
}
