import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import TodosItemPage from "./components/TodosItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Users</Link>
          <Link to="/todos">Todos</Link>
        </div>
        {/*      <EventsExample></EventsExample>
      <Card
        onClick={(num) => console.log("clicked", num)}
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
      >
        <button>click</button>
      </Card>*/}
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodosItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
