/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VoteWhereInput } from "./VoteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VoteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VoteWhereInput,
  })
  @ValidateNested()
  @Type(() => VoteWhereInput)
  @IsOptional()
  @Field(() => VoteWhereInput, {
    nullable: true,
  })
  every?: VoteWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoteWhereInput,
  })
  @ValidateNested()
  @Type(() => VoteWhereInput)
  @IsOptional()
  @Field(() => VoteWhereInput, {
    nullable: true,
  })
  some?: VoteWhereInput;

  @ApiProperty({
    required: false,
    type: () => VoteWhereInput,
  })
  @ValidateNested()
  @Type(() => VoteWhereInput)
  @IsOptional()
  @Field(() => VoteWhereInput, {
    nullable: true,
  })
  none?: VoteWhereInput;
}
export { VoteListRelationFilter as VoteListRelationFilter };
