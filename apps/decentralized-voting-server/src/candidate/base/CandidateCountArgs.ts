/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CandidateWhereInput } from "./CandidateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CandidateCountArgs {
  @ApiProperty({
    required: false,
    type: () => CandidateWhereInput,
  })
  @Field(() => CandidateWhereInput, { nullable: true })
  @Type(() => CandidateWhereInput)
  where?: CandidateWhereInput;
}

export { CandidateCountArgs as CandidateCountArgs };
