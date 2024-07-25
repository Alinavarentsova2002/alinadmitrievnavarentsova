import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";

export type ElectionWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  isActive?: BooleanNullableFilter;
  votes?: VoteListRelationFilter;
  candidates?: CandidateListRelationFilter;
};
