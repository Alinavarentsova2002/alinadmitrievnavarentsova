import { VoteUpdateManyWithoutVotersInput } from "./VoteUpdateManyWithoutVotersInput";

export type VoterUpdateInput = {
  name?: string | null;
  walletAddress?: string | null;
  email?: string | null;
  hasVoted?: boolean | null;
  votes?: VoteUpdateManyWithoutVotersInput;
};
