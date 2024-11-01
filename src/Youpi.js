import React from 'react';
import { Routes, Route ,Router} from 'react-router-dom';
// React Views
import Login from "./components/Auth/Login.js";
import Register from "./components/Auth/Register.js";
import TaskList from "./components/Tasks/TaskList.js";


export default function Youpi() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="*" element={<Login />} />
        </Routes>
    </>
  );
}