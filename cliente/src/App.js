import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Items from './components/items/items';
import Item from './components/item/item';
import SearchState from './context/search/searchState';
import ItemsState from './context/items/itemsState';


function App() {
	console.log(process.env.REACT_APP_BACKEND_URL);

	return (
		<SearchState>
			<ItemsState>
				<Router>
					<Switch>
						<Route exact path='/' component={Layout} />
						<Route exact path='/items' component={Items} />
						<Route exact path='/items/:id' component={Item} />
					</Switch>
				</Router>
			</ItemsState>
		</SearchState>
	);
}

export default App;
