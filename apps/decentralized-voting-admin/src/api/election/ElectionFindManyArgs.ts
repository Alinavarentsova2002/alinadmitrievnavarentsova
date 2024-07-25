import { ElectionWhereInput } from "./ElectionWhereInput";
import { ElectionOrderByInput } from "./ElectionOrderByInput";

export type ElectionFindManyArgs = {
  where?: ElectionWhereInput;
  orderBy?: Array<ElectionOrderByInput>;
  skip?: number;
  take?: number;
};
