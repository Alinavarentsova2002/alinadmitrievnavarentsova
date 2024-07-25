import { VoteCreateNestedManyWithoutElectionsInput } from "./VoteCreateNestedManyWithoutElectionsInput";
import { CandidateCreateNestedManyWithoutElectionsInput } from "./CandidateCreateNestedManyWithoutElectionsInput";

export type ElectionCreateInput = {
  title?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  isActive?: boolean | null;
  votes?: VoteCreateNestedManyWithoutElectionsInput;
  candidates?: CandidateCreateNestedManyWithoutElectionsInput;
};
