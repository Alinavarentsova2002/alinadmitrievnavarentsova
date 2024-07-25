import { CandidateWhereInput } from "./CandidateWhereInput";
import { CandidateOrderByInput } from "./CandidateOrderByInput";

export type CandidateFindManyArgs = {
  where?: CandidateWhereInput;
  orderBy?: Array<CandidateOrderByInput>;
  skip?: number;
  take?: number;
};
