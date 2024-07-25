import { VoteCreateNestedManyWithoutVotersInput } from "./VoteCreateNestedManyWithoutVotersInput";

export type VoterCreateInput = {
  name?: string | null;
  walletAddress?: string | null;
  email?: string | null;
  hasVoted?: boolean | null;
  votes?: VoteCreateNestedManyWithoutVotersInput;
};
