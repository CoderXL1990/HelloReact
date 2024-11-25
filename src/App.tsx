import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Tabs from "./components/Tabs";
function App() {
  return (
    <>
      <div className="bg-red-400">xxxxxx</div>
      <Tabs />
      <Routes>
        <Route index element={<Home />} />
        <Route path="todo" element={<Todo />} />
        {/* 
  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}
      </Routes>
    </>
  );
}

export default App;
