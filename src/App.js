import { UserProvider } from './Context/UseProvider';
import MyRoutes from './Pages/MyRoutes';

function App() {
  return (
    <UserProvider>
      <MyRoutes />
    </UserProvider>
  );
}

export default App;
