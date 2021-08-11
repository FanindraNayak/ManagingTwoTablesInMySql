import Mysql from "./Components/Mysql";
import ShowingData from "./Components/ShowingData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import View from "./Components/View";
import EditUser from "./Components/EditUser";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Mysql />
						<ShowingData />
					</Route>
					<Route exact path="/view/:id" component={View} />
					<Route exact path="/edit/:id" component={EditUser} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
