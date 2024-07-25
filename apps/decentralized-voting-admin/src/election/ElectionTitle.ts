import { Election as TElection } from "../api/election/Election";

export const ELECTION_TITLE_FIELD = "title";

export const ElectionTitle = (record: TElection): string => {
  return record.title?.toString() || String(record.id);
};
