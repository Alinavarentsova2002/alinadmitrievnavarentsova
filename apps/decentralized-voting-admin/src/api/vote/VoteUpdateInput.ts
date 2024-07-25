import { VoterWhereUniqueInput } from "../voter/VoterWhereUniqueInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { ElectionWhereUniqueInput } from "../election/ElectionWhereUniqueInput";

export type VoteUpdateInput = {
  timestamp?: Date | null;
  voter?: VoterWhereUniqueInput | null;
  candidate?: CandidateWhereUniqueInput | null;
  election?: ElectionWhereUniqueInput | null;
};
