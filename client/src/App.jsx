import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom"
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";

import UserDashboard from './pages/User/UserDashboard';
import MyTasks from './pages/User/MyTasks';
import ViewTaskDetails from './pages/User/ViewTaskDetails';

import PrivateRoutes from './routes/PrivateRoutes';
import UserProvider, { UserContext } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

            {/* Admin Routes */}
            <Route element={<PrivateRoutes allowedRole={["admin"]} />}>
              <Route path='/admin/dashboard' element={<Dashboard />} />
              <Route path='/admin/tasks' element={<ManageTasks />} />
              <Route path='/admin/create-task' element={<CreateTask />} />
              <Route path='/admin/users' element={<ManageUsers />} />
            </Route>

            {/* User Routes */}
            <Route element={<PrivateRoutes allowedRole={["admin"]} />}>
              <Route path='/user/dashboard' element={<UserDashboard />} />
              <Route path='/user/my-tasks' element={<MyTasks />} />
              <Route path='/user/task-details/:id' element={<ViewTaskDetails />} />
            </Route>

            {/* Default Route */}
            <Route path='/' element={<Root />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  )
}

export default App

const Root = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) return <Outlet />;

  if (!user) {
    return <Navigate to='/login' />
  }

  if (user.role == "admin") {
    return <Navigate to='/admin/dashboard' />
  } else {
    return <Navigate to='/user/dashboard' />
  }
}
