import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Outlet {...rest}>{(props) => <Component {...props} />}</Outlet>
  ) : (
    <Navigate to="/" />
  );
}
