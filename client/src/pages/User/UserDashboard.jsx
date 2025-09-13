import React from 'react';
import { useUserAuth } from "../../hooks/useUserAuth";

function UserDashboard() {
  useUserAuth();
  return (
    <div>
      UserDashboards
    </div>
  )
}

export default UserDashboard
