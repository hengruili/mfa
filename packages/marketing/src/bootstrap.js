import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//mount function to start the app
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    );
};

// in dev, we just query the mount selector
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export {mount};