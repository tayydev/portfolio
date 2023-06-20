import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Themed from "./Theme";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Themed>
            <App/>
        </Themed>
    </React.StrictMode>
);