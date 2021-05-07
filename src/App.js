import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

// wanted to continue this morning but overslept, finish it on weekend

function App() {
  return (
    <>
    <div>
      <h1>HELLO</h1>
      <MyNavbar />
      <CountriesList/>
    </div>

    <div>
      <Route path="/country/:id" />
    </div>
    </>
  );
}

export default App;
