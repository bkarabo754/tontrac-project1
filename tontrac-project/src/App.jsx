import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import DefaultLayout from "./layouts/DefaultLayout";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import PostsTab from "./pages/PostsTab";
import AddPosts from "./pages/AddPosts";
import EditPosts from "./pages/EditPosts";
import TabLayouts from "./layouts/TabLayouts";

const App = () => {
  return (
    <NavigationProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/new" element={<AddUserPage />} />
          <Route path="/" element={<TabLayouts />}>
            <Route path="users/:userId/edit" element={<EditUserPage />} />
            <Route path="users/:userId/posts" element={<PostsTab />} />
            <Route path="users/:userId/posts/:postId" element={<EditPosts />} />
            <Route path="users/:userId/posts/new" element={<AddPosts />} />
          </Route>
        </Route>
      </Routes>
    </NavigationProvider>
  );
};

export default App;
