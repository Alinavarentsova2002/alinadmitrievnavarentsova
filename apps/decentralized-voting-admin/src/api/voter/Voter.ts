import { Vote } from "../vote/Vote";

export type Voter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  walletAddress: string | null;
  email: string | null;
  hasVoted: boolean | null;
  votes?: Array<Vote>;
};
