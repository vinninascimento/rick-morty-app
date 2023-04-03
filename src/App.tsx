import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { FavoritesContextProvider } from './contexts/FavoritesContext';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <FavoritesContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home/favorites" exact component={Favorites} />
        </Switch>
      </FavoritesContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;