import { SortOrder } from "../../util/SortOrder";

export type VoteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  voterId?: SortOrder;
  candidateId?: SortOrder;
  electionId?: SortOrder;
};
