import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBookmark } from "../../../store/usersSlice";
import "./bookmark.css";

const Bookmark = ({ userId, users }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const ToggleBookMark = (id) => {
    setStatus(!status);
    const user = users.map((user) => {
      if (user.id === id) {
        return ({ ...user, bookmark: !user.bookmark});
      }
      return user;
    }
    );
    dispatch(getBookmark(user));
  };

  return (
    <button
      className={"heart" + (status ? " active" : "")}
      onClick={() => ToggleBookMark(userId)}
    >
      <div className="heart-flip"></div>
    </button>
  );
};

export default Bookmark;
