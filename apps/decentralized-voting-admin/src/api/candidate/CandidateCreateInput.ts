import { VoteCreateNestedManyWithoutCandidatesInput } from "./VoteCreateNestedManyWithoutCandidatesInput";
import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";

export type CandidateCreateInput = {
  voteCount?: number | null;
  name?: string | null;
  votes?: VoteCreateNestedManyWithoutCandidatesInput;
  election?: ElectionWhereUniqueInput | null;
};
