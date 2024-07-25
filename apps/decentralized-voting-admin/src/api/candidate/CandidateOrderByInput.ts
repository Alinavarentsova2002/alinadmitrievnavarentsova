import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  voteCount?: SortOrder;
  name?: SortOrder;
  electionId?: SortOrder;
};
