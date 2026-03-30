import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}
