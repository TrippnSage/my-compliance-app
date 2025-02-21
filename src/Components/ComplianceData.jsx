import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComplianceData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCSVData = async () => {
        try {
            const response = await axios.get(https://docs.google.com/spreadsheets/d/e/2PACX-1vQCRwrk-YZR4LigTthEslaIomT7XmUtJuwMJGJOjKNU85mzWn9VsnMnYGDK9Cq68e1wTlzikenMXOAk/pub?output=csv); // Replace with your CSV link
            const csvData = response.data.split('\n').map(row => row.split(','));
            setData(csvData);
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCSVData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Compliance Data</h2>
            <table>
                <thead>
                    <tr>
                        {data[0].map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComplianceData;
