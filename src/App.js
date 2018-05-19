import React, { PureComponent } from 'react';
import './App.css';
import configureStore from "./core/store";
import {Provider} from "react-redux";
import CardPanel from "./components/CardPanel";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = configureStore();

class App extends PureComponent {
  render() {
    return (
        <BrowserRouter basename={"/"}>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={CardPanel} />
                    <Route exact path="/asdf" component={CardPanel} />
                </Switch>
            </Provider>
        </BrowserRouter>

    );
  }
}

export default App;
