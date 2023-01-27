import React from 'react'
import { Route, Routes } from "react-router-dom";
import Add from '../pages/Crud/Add';
import Edit from "../pages/Crud/Edit";
import CrudNavbar from '../pages/CrudNavbar';
import CrudHome from '../pages/CrudHome';

const Crud = () => {
  return (
    <div>
      <CrudNavbar />
      <Routes>
        <Route path="/userlist" exact element={<CrudHome />} />
        <Route path="/userlist" exact element={<CrudHome />} />
        <Route path="/add-user" exact element={<Add />} />
        <Route path="/edit-user/:id" exact element={<Edit />} />
      </Routes>
    </div>
  );
}

export default Crud