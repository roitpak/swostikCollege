import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
import { useUser } from '../Context/useUser';

export default function MyRoutes() {
  const { hasUser } = useUser();
  return (
    <Router>
      <Routes>
        {hasUser ? (
          <Route exact path="/" Component={Dashboard} />
        ) : (
          <Route exact path="/" Component={LoginPage} />
        )}
      </Routes>
    </Router>
  );
}
