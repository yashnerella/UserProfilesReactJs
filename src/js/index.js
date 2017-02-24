/**
 * Created by yashw on 08-02-2017.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {App} from './components/App';
import {AppInfo} from './components/AppInfo';
import {AboutUs} from './components/AboutUs';
import {Root} from './components/Root';


render( <Root/>, document.getElementById('app'));