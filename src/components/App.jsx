import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import headerBackground from "../assets/images/Banner.jpg";
import Layout from "./Layout";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Filter from "../components/filter/Filter";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Header {...props} bgImage={headerBackground}>
                <Filter />
                <Footer />
              </Header>
            )}
          />
        </Switch>
        <Layout></Layout>
      </BrowserRouter>
    );
  }
}

export default App;
