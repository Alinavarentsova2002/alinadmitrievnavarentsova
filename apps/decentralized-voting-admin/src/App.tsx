import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VoteList } from "./vote/VoteList";
import { VoteCreate } from "./vote/VoteCreate";
import { VoteEdit } from "./vote/VoteEdit";
import { VoteShow } from "./vote/VoteShow";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { VoterList } from "./voter/VoterList";
import { VoterCreate } from "./voter/VoterCreate";
import { VoterEdit } from "./voter/VoterEdit";
import { VoterShow } from "./voter/VoterShow";
import { ElectionList } from "./election/ElectionList";
import { ElectionCreate } from "./election/ElectionCreate";
import { ElectionEdit } from "./election/ElectionEdit";
import { ElectionShow } from "./election/ElectionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DecentralizedVoting"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vote"
          list={VoteList}
          edit={VoteEdit}
          create={VoteCreate}
          show={VoteShow}
        />
        <Resource
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="Voter"
          list={VoterList}
          edit={VoterEdit}
          create={VoterCreate}
          show={VoterShow}
        />
        <Resource
          name="Election"
          list={ElectionList}
          edit={ElectionEdit}
          create={ElectionCreate}
          show={ElectionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
