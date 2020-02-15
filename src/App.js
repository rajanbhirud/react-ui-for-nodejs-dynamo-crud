import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.scss';
import Layout from "./components/common/Layout";
import UsersContainer from "./components/user-management-home/UsersContainer";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" component={UsersContainer}/>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
