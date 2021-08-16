import logo from './logo.svg';
import './App.css';
import {io} from "socket.io-client";
import Typography from "@material-ui/core/Typography";
import Swipe from "./components/swipe";

function App() {

  const myIo = io();
  myIo.connect();

  return (
    <div className="App">
      <h1>App Remote Contoroller</h1>
      <Swipe myIo={myIo}/>
    </div>
  );
}

export default App;
