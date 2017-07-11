import React from 'react'
import ReactDOM from 'react-dom'
import RouterRoot from './router'
import RegisterServiceWorker from './service/registerServiceWorker'

ReactDOM.render((
    <RouterRoot />
), document.getElementById('root'));
RegisterServiceWorker();
