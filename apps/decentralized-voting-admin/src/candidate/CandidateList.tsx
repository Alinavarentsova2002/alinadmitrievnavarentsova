import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ELECTION_TITLE_FIELD } from "../election/ElectionTitle";

export const CandidateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Candidates"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
