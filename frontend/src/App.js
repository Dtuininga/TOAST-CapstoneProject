import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import BreweriesList from './Components/Brewery/BreweriesList'
import BreweryDetails from './Components/Beer/BeerDetails'


const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
