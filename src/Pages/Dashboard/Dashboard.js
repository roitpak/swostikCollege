import { Account, Client } from 'appwrite';
import { useEffect } from 'react';

const client = new Client();

client
  .setEndpoint(process.env.REACT_APP_APPWRITE_END_POINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
const account = new Account(client);

function Dashboard() {
  useEffect(() => {
    getEmailSession();
  }, []);
  const getEmailSession = async () => {
    await account
      .get()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>This is a dashboard.</div>;
}

export default Dashboard;
