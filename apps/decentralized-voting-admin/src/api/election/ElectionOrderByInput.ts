import { SortOrder } from "../../util/SortOrder";

export type ElectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  isActive?: SortOrder;
};
