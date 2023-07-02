import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter.js'
import PageHeader from './PageHeader.js';
import {Outlet} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <PageHeader />
      <AppRouter />
      <Outlet />
    </div>
  );
}

export default App;
