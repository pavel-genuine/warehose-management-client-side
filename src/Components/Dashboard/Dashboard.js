import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import './Dashboard.css'

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://secret-scrubland-28960.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (


        <div  className='dash-board'>
            <div style={{height:'70vh'}} className="w-100 my-5 mx-auto">
                <h5 className='text-center' style={{ color: '#82ca9d' }}>Bar Chart of Stock</h5>
                <BarChart className='bar mx-auto' title="Chart of PU x UV" width={300} height={300} data={data}>

                    <XAxis dataKey="price" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                    <Bar dataKey="quantity" stackId="a" fill="#ffc658" />
                    <Bar dataKey="price" stackId="a" fill="#82ca9d" />

                    <Legend style={{ buttom: 0, right: 0 }} />
                </BarChart>
            </div>
        </div>

    );
};

export default Dashboard;