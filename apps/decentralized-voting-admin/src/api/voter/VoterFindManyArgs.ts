import { VoterWhereInput } from "./VoterWhereInput";
import { VoterOrderByInput } from "./VoterOrderByInput";

export type VoterFindManyArgs = {
  where?: VoterWhereInput;
  orderBy?: Array<VoterOrderByInput>;
  skip?: number;
  take?: number;
};
