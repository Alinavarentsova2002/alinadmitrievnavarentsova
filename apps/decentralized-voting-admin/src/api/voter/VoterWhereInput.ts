import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";

export type VoterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  walletAddress?: StringNullableFilter;
  email?: StringNullableFilter;
  hasVoted?: BooleanNullableFilter;
  votes?: VoteListRelationFilter;
};
