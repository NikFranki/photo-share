import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app';
import About from './modules/about';
import Repos from './modules/repos';
import Home from './modules/home';
import Pos from './modules/pos';
import Pop from './modules/pop';
import Repo from './modules/repo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.less';

const Nav = () =>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />

                <Route path="about" component={About} >
                    <Route path=":userName/:repoName" component={Repo} />
                </Route>
                <Route path="repos" component={Repos} />
                <Route path="pos" component={Pos} />
                <Route path="pop" component={Pop} />
            </Route>
        </Router>

ReactDOM.render(<Nav />, document.getElementById('material-nav'));
