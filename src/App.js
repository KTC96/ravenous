import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';


export const businesses = [
  {
    image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
    name: 'Restaurant Two',
    address: '456 Side St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '75001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 85
  },
  {
    image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
    name: 'Restaurant T',
    address: '456 Side St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '75001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 85
  },
  {
    image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
    name: 'Restaurant Two',
    address: '456 Side St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '75001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 85
  },
  {
    image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
    name: 'Restaurant Two',
    address: '456 Side St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '75001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 85
  },
  {
    image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
    name: 'Restaurant Two',
    address: '456 Side St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '75001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 85
  },
  {
    image: 'https://patch.com/img/cdn20/users/24423246/20231110/123216/styles/patch_image/public/unnamed-54___10123038855.jpg?width=1200',
    name: 'Restaurant Two',
    address: '456 Side St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '75001',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 85
  }
];

function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>FindMyTable</h1>
      </div>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
