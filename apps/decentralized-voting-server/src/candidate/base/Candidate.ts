/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsInt,
  Min,
  Max,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Vote } from "../../vote/base/Vote";
import { Election } from "../../election/base/Election";

@ObjectType()
class Candidate {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  voteCount!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Vote],
  })
  @ValidateNested()
  @Type(() => Vote)
  @IsOptional()
  votes?: Array<Vote>;

  @ApiProperty({
    required: false,
    type: () => Election,
  })
  @ValidateNested()
  @Type(() => Election)
  @IsOptional()
  election?: Election | null;
}

export { Candidate as Candidate };