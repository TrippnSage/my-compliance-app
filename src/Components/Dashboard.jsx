import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [licenseStatus, setLicenseStatus] = useState('Active');
    const [upcomingDeadlines, setUpcomingDeadlines] = useState(0);
    const [alerts, setAlerts] = useState([]);

    // Fetch data from an API when the component mounts
    useEffect(() => {
        const fetchComplianceData = async () => {
            try {
                const response = await fetch('/api/compliance-data'); // Replace with your API endpoint
                const data = await response.json();
                setLicenseStatus(data.licenseStatus);
                setUpcomingDeadlines(data.upcomingDeadlines);
                setAlerts(data.alerts);
            } catch (error) {
                console.error('Error fetching compliance data:', error);
            }
        };

        fetchComplianceData();
    }, []); // Empty dependency array means this runs once when component mounts

    return (
        <div className="dashboard">
            <h2>Compliance Overview</h2>
            <p>License Status: {licenseStatus}</p>
            <p>Upcoming Deadlines: {upcomingDeadlines}</p>
            <h3>Alerts</h3>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
