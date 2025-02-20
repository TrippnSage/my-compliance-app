import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Alerts from './Components/Alerts'; // Importing Alerts component

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ReguLeaf AI Compliance Dashboard</h1>
                <p>Your compliance status will be displayed here.</p>
            </header>
            <Dashboard />
            <Alerts /> {/* Render Alerts component */}
        </div>
    );
}

export default App;
