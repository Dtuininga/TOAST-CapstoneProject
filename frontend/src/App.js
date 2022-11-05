import Main from './Components/Main/Main'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigureStore} from './Redux/configureStore'
import BreweriesList from './Components/Brewery/BreweriesList'


const store = ConfigureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <BreweriesList/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
