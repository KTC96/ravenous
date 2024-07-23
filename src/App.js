import logo from './logo.svg';
import './App.css';
import Business from './Business';
import BusinessList from './BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        <BusinessList />
      </p>
    </div>
  );
}



export default App;
