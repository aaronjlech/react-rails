import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import SiteWrapper from './components/SiteWrapper';
import Articles from './containers/Articles';
import CreateArticle from './containers/CreateArticle';
import SingleArticle from './containers/SingleArticle';

const Home = () => <h1>Home page</h1>;

class App extends Component {

	render() {
		return (
			<Router>
				<SiteWrapper>
					<Route exact path="/" component={Home}/>
					<Route exact path="/articles" component={Articles}/>
					<Route exact path="/articles/:id" component={SingleArticle}/>
					<Route exact path="/articles-create" component={CreateArticle}/>
				</SiteWrapper>
			</Router>
		);
	}
}

export default App;