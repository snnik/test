import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListComponent from './ListComponent';
import PostComponent from './PostComponent';
import CreateComponent from './CreateComponent';

class ExampleApp extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <h1>Пример блога</h1>
                    <h2>Редактирование и список</h2>
                    <Switch>
                        <Route path="/" exact component={ListComponent} />
                        <Route path="/post/create" component={CreateComponent} />
                        <Route path="/post/:id" component={PostComponent} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ExampleApp