import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VoterTitle } from "../voter/VoterTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { ElectionTitle } from "../election/ElectionTitle";

export const VoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput source="voter.id" reference="Voter" label="Voter">
          <SelectInput optionText={VoterTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="election.id"
          reference="Election"
          label="Election"
        >
          <SelectInput optionText={ElectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
