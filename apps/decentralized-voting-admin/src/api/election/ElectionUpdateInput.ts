import { VoteUpdateManyWithoutElectionsInput } from "./VoteUpdateManyWithoutElectionsInput";
import { CandidateUpdateManyWithoutElectionsInput } from "./CandidateUpdateManyWithoutElectionsInput";

export type ElectionUpdateInput = {
  title?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  isActive?: boolean | null;
  votes?: VoteUpdateManyWithoutElectionsInput;
  candidates?: CandidateUpdateManyWithoutElectionsInput;
};
