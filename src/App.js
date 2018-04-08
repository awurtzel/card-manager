import React, { PureComponent } from 'react';
import './App.css';
import configureStore from "./core/store";
import {Provider} from "react-redux";
import CardPanel from "./components/CardPanel";

const store = configureStore();

class App extends PureComponent {
  render() {
    return (
        <Provider store={store}>
            <CardPanel />
        </Provider>
    );
  }
}

export default App;
