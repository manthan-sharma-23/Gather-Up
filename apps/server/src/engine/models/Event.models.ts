import { Field, ObjectType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString } from 'class-validator';

export enum EventScope {
  GLOBAL = 'GLOBAL',
  PERSONAL = 'PERSONAL',
  COMMUNITY = 'COMMUNITY',
}
export enum EventRoles {
  HOST = 'HOST',
  MANAGER = 'MANAGER',
  PARTICIPANT = 'PARTICIPANT',
}

export enum EventStatus {
  SCHEDULED = 'SCHEDULED',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@ObjectType()
export class Event {
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

  @Field()
  @IsString()
  userId: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  communityId?: string;
}
