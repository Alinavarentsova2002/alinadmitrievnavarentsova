import { Voter } from "../voter/Voter";
import { Candidate } from "../candidate/Candidate";
import { Election } from "../election/Election";

export type Vote = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  voter?: Voter | null;
  candidate?: Candidate | null;
  election?: Election | null;
};
