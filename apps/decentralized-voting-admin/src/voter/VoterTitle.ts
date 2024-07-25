import { Voter as TVoter } from "../api/voter/Voter";

export const VOTER_TITLE_FIELD = "name";

export const VoterTitle = (record: TVoter): string => {
  return record.name?.toString() || String(record.id);
};
