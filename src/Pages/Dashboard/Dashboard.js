import { useEffect } from 'react';
import authService from '../../services/authService';

function Dashboard() {
  useEffect(() => {
    getEmailSession();
  }, []);
  const getEmailSession = async () => {
    await authService
      .getUser()
      .then((response) => {
        console.log('User data--->', response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>This is a dashboard.</div>;
}

export default Dashboard;
