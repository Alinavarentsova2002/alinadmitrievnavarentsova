import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "name";

export const CandidateTitle = (record: TCandidate): string => {
  return record.name?.toString() || String(record.id);
};
