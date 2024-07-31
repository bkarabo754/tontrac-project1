// import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import { NavigationProvider } from '../context/NavigationContext';
// import UsersPage from '../pages/UsersPage';
// import AddUserPage from '../pages/AddUserPage';
// import EditUserPage from '../pages/EditUserPage';
// import DefaultLayout from '@/layouts';

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Navigate to="/users" />,
//     },
//     {
//       path: '/',
//       element: <DefaultLayout />,
//       children: [
//         { path: 'users', element: <UsersPage /> },
//         { path: 'users/new', element: <AddUserPage /> },
//         { path: 'users/:userId', element: <EditUserPage /> },
//       ],
//     },
//   ]);

// const AppRouter = () => {
//   return (
//     <NavigationProvider>
//       <RouterProvider router={router}>
//         <Outlet />
//       </RouterProvider>
//     </NavigationProvider>
//   )
// }

// export default AppRouter
