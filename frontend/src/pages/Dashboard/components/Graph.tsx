import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
    { month: 'Jan', revenue: 4000, expenses: 2400 },
    { month: 'Feb', revenue: 3000, expenses: 1398 },
    { month: 'Mar', revenue: 2000, expenses: 9800 },
    { month: 'Apr', revenue: 2780, expenses: 3908 },
    { month: 'May', revenue: 1890, expenses: 4800 },
    { month: 'Jun', revenue: 2390, expenses: 3800 },
    { month: 'Jul', revenue: 3490, expenses: 4300 },
];

function Graph() {
  return (
    <div className="bg-white shadow rounded-2xl border border-solid border-gray-200 p-4 w-full md:w-1/2">
      <h2 className="text-lg font-semibold mb-4">Sales — last 7 days</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


export default Graph
