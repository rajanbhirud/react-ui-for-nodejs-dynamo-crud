import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./components/home/Home";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
