import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VOTER_TITLE_FIELD } from "../voter/VoterTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { ELECTION_TITLE_FIELD } from "./ElectionTitle";

export const ElectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="EndDate" source="endDate" />
        <BooleanField label="IsActive" source="isActive" />
        <ReferenceManyField reference="Vote" target="electionId" label="Votes">
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
        <ReferenceManyField
          reference="Candidate"
          target="electionId"
          label="Candidates"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
