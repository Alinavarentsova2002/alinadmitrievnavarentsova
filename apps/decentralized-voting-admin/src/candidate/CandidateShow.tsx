import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VOTER_TITLE_FIELD } from "../voter/VoterTitle";
import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { ELECTION_TITLE_FIELD } from "../election/ElectionTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VoteCount" source="voteCount" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Election"
          source="election.id"
          reference="Election"
        >
          <TextField source={ELECTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Vote" target="candidateId" label="Votes">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Timestamp" source="timestamp" />
            <ReferenceField label="Voter" source="voter.id" reference="Voter">
              <TextField source={VOTER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Election"
              source="election.id"
              reference="Election"
            >
              <TextField source={ELECTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
