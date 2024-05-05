
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';






const CovidAreaChart = ({data}) => {
    

    // Render the Area chart using Recharts
    return (
        <div>
            <h2>COVID-19 Cases in India (Area Chart)</h2>
            <AreaChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Daily Confirmed" stroke="blue" fill="blue" fillOpacity={0.3} name="Confirmed" />
                <Area type="monotone" dataKey="Daily Recovered" stroke="green" fill="green" fillOpacity={0.3} name="Recovered" />
                <Area type="monotone" dataKey="Daily Deceased" stroke="red" fill="red" fillOpacity={0.3} name="Deceased" />
            </AreaChart>
        </div>
    );
};

export default CovidAreaChart;
