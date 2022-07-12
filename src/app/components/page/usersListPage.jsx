import React from "react";
import { useSelector } from "react-redux";
import { getFavoriteUsers, getUsersList } from "../../store/usersSlice";
import { Container } from "react-bootstrap";
import Loading from "../ui/loading";
import { useHistory } from "react-router-dom";
import RenderingUsers from "../common/renderingUsers";

const UsersListPage = () => {
  const users = useSelector(getUsersList());
  const favoriteUsers = useSelector(getFavoriteUsers());
  const { location } = useHistory();
  const url = location.pathname;
  return (
    <Container>
      {/* {!users ? <Loading/>
        : ( <div className="cards-wrapper">
          {url === "/favorites"
            ? <RenderingUsers usersList={favoriteUsers}/>
            : <RenderingUsers usersList={users}/>
          }
        </div>)} */}
      <div className="cards-wrapper">
        <RenderingUsers usersList={users} />
      </div>
    </Container>
  );
};

export default UsersListPage;
