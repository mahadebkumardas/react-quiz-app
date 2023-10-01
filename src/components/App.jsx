import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route Component={PublicRoute}>
              <Route path="/signup" Component={SignUp} />
              <Route path="/login" Component={Login} />
            </Route>
            <Route Component={PrivateRoute}>
              <Route path="/quiz/:id" Component={Quiz} />
              <Route path="/result/:id" Component={Result} />
            </Route>
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
