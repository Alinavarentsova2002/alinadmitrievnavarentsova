import { Vote } from "../vote/Vote";
import { Election } from "../election/Election";

export type Candidate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  voteCount: number | null;
  name: string | null;
  votes?: Array<Vote>;
  election?: Election | null;
};
