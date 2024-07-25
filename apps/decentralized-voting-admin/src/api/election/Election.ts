import { Vote } from "../vote/Vote";
import { Candidate } from "../candidate/Candidate";

export type Election = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  startDate: Date | null;
  endDate: Date | null;
  isActive: boolean | null;
  votes?: Array<Vote>;
  candidates?: Array<Candidate>;
};
