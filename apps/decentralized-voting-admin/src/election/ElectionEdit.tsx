import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VoteTitle } from "../vote/VoteTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";

export const ElectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <DateTimeInput label="StartDate" source="startDate" />
        <DateTimeInput label="EndDate" source="endDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <ReferenceArrayInput
          source="votes"
          reference="Vote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidates"
          reference="Candidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
