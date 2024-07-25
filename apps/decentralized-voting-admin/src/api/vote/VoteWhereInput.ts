import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VoterWhereUniqueInput } from "../voter/VoterWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";

export type VoteWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  voter?: VoterWhereUniqueInput;
  candidate?: CandidateWhereUniqueInput;
  election?: ElectionWhereUniqueInput;
};
