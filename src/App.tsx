import { BrowserRouter } from "react-router";
import Router from "./router/appRouter";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
