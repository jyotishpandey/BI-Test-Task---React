
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';





const CovidColumnChart = ({data}) => {
   
    // Render the column chart using Recharts
    return (
        <div>
            <h2>COVID-19 Daily Deceased and Recovered (Column Chart)</h2>
            <BarChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Daily Recovered" fill="green" name="Recovered" />
                <Bar dataKey="Daily Deceased" fill="red" name="Deceased" />
            </BarChart>
        </div>
    );
};

export default CovidColumnChart;
