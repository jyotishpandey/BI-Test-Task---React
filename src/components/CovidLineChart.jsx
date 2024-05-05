
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';



const CovidLineChart = ({data,type,stroke}) => {

  const mystyle = {
    color: "white",
    backgroundColor: "#FAF9F6",
   
  };

  // Render the Line chart using recharts
  return (
    <div>
      
      <LineChart  style={mystyle} width={200} height={150} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={type} dot={false} stroke={stroke} activeDot={{ stroke: 'red', strokeWidth: 1, r: 5 }} />
        
      </LineChart>
    </div>
  );
};

export default CovidLineChart;
