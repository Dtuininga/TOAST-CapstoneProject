import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import BeerList from './Components/Beer/BeerList'
const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <BeerList/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
