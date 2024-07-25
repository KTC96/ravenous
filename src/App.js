import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>FindMyTable</h1>
      </div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
