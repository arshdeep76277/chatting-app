import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import {BrowserRouter as Router,Switch,Route, useParams} from 'react-router-dom'
import Login from "./components/Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{user},]=useStateValue();
  return (
    <div className="app">
    {!user?(<Login />):(<div className="app_body">
      <Router>
        <Switch>
          
           <Route path="/rooms/:roomId">
           <Sidebar />
           <Chat />
           </Route>
         
         <Route path="/">
         <Sidebar />
           <Chat />
         </Route>
        </Switch>
     
      </Router>
     
      </div>)}
    </div>
  );
}
export default App;
