
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';





const CovidBarChart = ({data}) => {
  

    const mystyle = {
        color: "white",
        backgroundColor: "#FAF9F6",
       
      };


    // Render the Bar chart using Recharts
    return (
        <div>
            
            <BarChart style={mystyle} width={800} height={200} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
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

export default CovidBarChart;
