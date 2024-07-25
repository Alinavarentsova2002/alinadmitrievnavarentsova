import { Vote as TVote } from "../api/vote/Vote";

export const VOTE_TITLE_FIELD = "id";

export const VoteTitle = (record: TVote): string => {
  return record.id?.toString() || String(record.id);
};
