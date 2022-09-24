import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// export function PrivateRoute({ children, ...otherProps }) {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   return (
//     <Route {...otherProps}>
//       {!isLoggedIn ? <Navigate to="/" /> : children}
//     </Route>
//   );
// }

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" />;
};
