import { VoteWhereUniqueInput } from "../vote/VoteWhereUniqueInput";

export type VoteUpdateManyWithoutVotersInput = {
  connect?: Array<VoteWhereUniqueInput>;
  disconnect?: Array<VoteWhereUniqueInput>;
  set?: Array<VoteWhereUniqueInput>;
};
