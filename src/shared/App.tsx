import React from "react";
import * as styles from "../main.global.css"
import { Header } from "./Header";
import { hot } from "react-hot-loader/root";
import { Content } from "./Content";

function AppComponent () {
  return (
    <div className="App">
      <Header ContainerStyle={styles.MainContainer}/>
        <Content ContainerStyle={styles.MainContainer}/>
    </div>
  )
}

const App = hot(() => (
  <AppComponent />
));

export { App };
