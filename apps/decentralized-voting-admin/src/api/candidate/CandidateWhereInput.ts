import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";
import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";

export type CandidateWhereInput = {
  id?: StringFilter;
  voteCount?: IntNullableFilter;
  name?: StringNullableFilter;
  votes?: VoteListRelationFilter;
  election?: ElectionWhereUniqueInput;
};
