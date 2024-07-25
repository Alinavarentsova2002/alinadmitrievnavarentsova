import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VoteTitle } from "../vote/VoteTitle";
import { ElectionTitle } from "../election/ElectionTitle";

export const CandidateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="VoteCount" source="voteCount" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="votes"
          reference="Vote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoteTitle} />
        </ReferenceArrayInput>
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
