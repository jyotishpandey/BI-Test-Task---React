
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Papa from 'papaparse';

const CovidDonutChart = () => {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);


    useEffect(() => {
        fetch('/case_time_series.csv')
            .then((response) => response.text())
            .then((csvText) => {
                const parsedData = Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                });
                setData(parsedData.data);
                prepareChartData(parsedData.data);
            });
    }, []);

   
    const prepareChartData = (data) => {
        if (data.length > 0) {
            const latestData = data[data.length - 1];
            setChartData([
                { name: 'Daily Deceased', value: latestData['Daily Deceased'] },
                { name: 'Daily Recovered', value: latestData['Daily Recovered'] },
                { name: 'Daily Confirmed', value: latestData['Daily Confirmed'] },
            ]);
        }
    };


    return (
        <div>
            
            <PieChart width={200} height={200}>
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={75}
                    innerRadius={50}
                    fill="#8884d8"
                    label
                >
                    <Cell fill="red" />
                    <Cell fill="green" />
                    <Cell fill="blue" />
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default CovidDonutChart;
