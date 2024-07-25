import { SortOrder } from "../../util/SortOrder";

export type VoterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  walletAddress?: SortOrder;
  email?: SortOrder;
  hasVoted?: SortOrder;
};
