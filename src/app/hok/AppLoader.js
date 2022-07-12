import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { getUsersLoadingStatus, loadUsersList } from "../store/usersSlice";

const AppLoader = ({children}) => {
  const dispatch = useDispatch();
  const usersStatusLoading = useSelector(getUsersLoadingStatus());
  useEffect(() => {
    dispatch(loadUsersList());
  }, []);
  if (usersStatusLoading) return "Loading...";
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppLoader;