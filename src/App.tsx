import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { UsersList } from './pages/UsersList'
import { TodoList } from './pages/TodoList'

function App() {
  return (
    <div>
      <h1>Onboarding Tracker</h1>
      <BrowserRouter>
        <Routes>

          <Route path="users" element={<UsersList />}>
            <Route path=":id" element={<TodoList />} />
          </Route>
          <Route path="*" element={<Navigate to="/users/1" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
