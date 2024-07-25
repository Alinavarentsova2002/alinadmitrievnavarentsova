import { VoteUpdateManyWithoutCandidatesInput } from "./VoteUpdateManyWithoutCandidatesInput";
import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";

export type CandidateUpdateInput = {
  voteCount?: number | null;
  name?: string | null;
  votes?: VoteUpdateManyWithoutCandidatesInput;
  election?: ElectionWhereUniqueInput | null;
};
