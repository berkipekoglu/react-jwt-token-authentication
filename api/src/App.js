import './App.css';
import { setAuthToken } from './helpers/setAuthToken';
import Routers from './routes'

function App() {
  //check jwt token
 const token = localStorage.getItem("token");
 if (token) {
     setAuthToken(token);
 }

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
