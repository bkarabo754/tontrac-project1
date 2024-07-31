import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "@/api";
import ConfirmationModel from "@/components/ConfirmationModel";
import UserTable from "@/components/UserTable";

const initialState = {
  users: [],
  selectedRows: [],
  showDeleteConfirmation: false,
  userToDelete: null,
  error: null,
};

const actionTypes = {
  SET_USERS: "SET_USERS",
  SET_SELECTED_ROWS: "SET_SELECTED_ROWS",
  SHOW_DELETE_CONFIRMATION: "SHOW_DELETE_CONFIRMATION",
  SET_USER_TO_DELETE: "SET_USER_TO_DELETE",
  HIDE_DELETE_CONFIRMATION: "HIDE_DELETE_CONFIRMATION",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return { ...state, users: action.payload };
    case actionTypes.SET_SELECTED_ROWS:
      return { ...state, selectedRows: action.payload };
    case actionTypes.SHOW_DELETE_CONFIRMATION:
      return { ...state, showDeleteConfirmation: true };
    case actionTypes.SET_USER_TO_DELETE:
      return { ...state, userToDelete: action.payload };
    case actionTypes.HIDE_DELETE_CONFIRMATION:
      return { ...state, showDeleteConfirmation: false, userToDelete: null };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case actionTypes.CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

function UsersPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, selectedRows, showDeleteConfirmation, userToDelete, error } =
    state;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      dispatch({ type: actionTypes.SET_USERS, payload: usersData });
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: "Error fetching users",
      });
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      if (users.length === 1) {
        dispatch({ type: actionTypes.SHOW_DELETE_CONFIRMATION });
        dispatch({ type: actionTypes.SET_USER_TO_DELETE, payload: userId });
      } else {
        await deleteUser(userId);
        await fetchUsers();
      }
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, payload: "Error deleting user" });
      console.error("Error deleting user:", error);
    }
  };

  const confirmDeleteUser = async () => {
    try {
      if (userToDelete) {
        await deleteUser(userToDelete);
        await fetchUsers();
      }
      dispatch({ type: actionTypes.HIDE_DELETE_CONFIRMATION });
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: "Error confirming delete",
      });
      console.error("Error confirming delete:", error);
    }
  };

  const cancelDeleteUser = () => {
    dispatch({ type: actionTypes.HIDE_DELETE_CONFIRMATION });
    dispatch({ type: actionTypes.SET_USER_TO_DELETE, payload: null });
  };

  return (
    <div className="ml-[-30px] px-4 md:px-8 lg:px-1 overflow-x-hidden">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl text-text font-semibold whitespace-nowrap">
          Blog Users
        </h1>
        <div className="flex items-center space-x-4">
          <Link
            to="/users/new"
            className="border rounded-lg flex items-center font-semibold text-text py-[2px] lg:py-2 px-6 ml-1 mt-3 whitespace-nowrap"
          >
            <span className="text-2xl mr-3 mb-1">+</span> Add User
          </Link>
        </div>
      </div>

      <div className="w-full">
        <UserTable
          users={users}
          selectedRows={selectedRows}
          handleDeleteUser={handleDeleteUser}
        />
      </div>

      <div className="absolute bottom-0 left-0 p-4 text-sm text-accent">
        <div className="text-sm text-secondary hover:text-text ml-5">
          {users.length} row(s).
        </div>
      </div>

      <ConfirmationModel
        isOpen={showDeleteConfirmation}
        message="Are you sure you want to delete the last user?"
        onConfirm={confirmDeleteUser}
        onCancel={cancelDeleteUser}
      />
    </div>
  );
}

export default UsersPage;
