import React from "react";
import UsersListPage from "../page/usersListPage";
import UsersLoader from "../../hok/Users";

const Users = () => {
  return (
    <>
      <UsersLoader>
        <UsersListPage/>
      </UsersLoader>
    </>
  );
};

export default Users;
