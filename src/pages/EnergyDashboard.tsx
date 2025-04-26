import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, GaugeCircle } from 'lucide-react';

// Monthly data for electricity usage
const electricityData = [
  { month: 'Jan', '2022': 65000, '2023': 82000, '2024': 85000 },
  { month: 'Feb', '2022': 55000, '2023': 85000, '2024': 72000 },
  { month: 'Mar', '2022': 62000, '2023': 75000, '2024': 72000 },
  { month: 'Apr', '2022': 58000, '2023': 70000, '2024': 68000 },
  { month: 'May', '2022': 72000, '2023': 85000, '2024': 85000 },
  { month: 'Jun', '2022': 75000, '2023': 110000, '2024': 85000 },
  { month: 'Jul', '2022': 85000, '2023': 110000, '2024': 95000 },
  { month: 'Aug', '2022': 92000, '2023': 92000, '2024': 88000 },
  { month: 'Sep', '2022': 70000, '2023': 85000, '2024': 85000 },
  { month: 'Oct', '2022': 65000, '2023': 85000, '2024': 35000 },
  { month: 'Nov', '2022': 60000, '2023': 80000, '2024': 0 },
  { month: 'Dec', '2022': 62000, '2023': 72000, '2024': 0 },
];

// Monthly data for gas usage
const gasData = [
  { month: 'Jan', '2022': 17000, '2023': 22000, '2024': 18000 },
  { month: 'Feb', '2022': 14000, '2023': 15000, '2024': 13000 },
  { month: 'Mar', '2022': 12000, '2023': 14000, '2024': 10000 },
  { month: 'Apr', '2022': 9500, '2023': 12000, '2024': 8000 },
  { month: 'May', '2022': 5000, '2023': 7000, '2024': 4000 },
  { month: 'Jun', '2022': 3000, '2023': 4000, '2024': 1500 },
  { month: 'Jul', '2022': 2000, '2023': 1500, '2024': 1000 },
  { month: 'Aug', '2022': 1500, '2023': 1500, '2024': 1000 },
  { month: 'Sep', '2022': 2500, '2023': 3000, '2024': 2000 },
  { month: 'Oct', '2022': 8000, '2023': 7000, '2024': 5000 },
  { month: 'Nov', '2022': 12000, '2023': 11000, '2024': 0 },
  { month: 'Dec', '2022': 19000, '2023': 17000, '2024': 0 },
];

const EnergyDashboard = () => {
  return (
    <div className="bg-gray-50 p-6 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-gray-200 rounded-md flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Korenmolenlaan 4</div>
              <div className="text-sm text-gray-500">Woerden, NL</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-400 text-green-800 font-bold p-2 flex items-center justify-center text-xl">
              TVVL
            </div>
          </div>
        </div>

        {/* Property information */}
        <div className="bg-white rounded-lg shadow mb-6 p-4 grid grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-gray-500">Construction Year</div>
            <div className="font-semibold">2,001</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Floor Area</div>
            <div className="font-semibold">13,132m²</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Energy Label</div>
            <div className="font-semibold text-green-600">A</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Total CO₂ Emissions</div>
            <div className="font-semibold">531.0 tons</div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-4 gap-6">
          {/* Left column */}
          <div className="col-span-1">
            {/* Building image */}
            <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
              <img 
                src="/api/placeholder/400/250"
                alt="Building" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Environmental impact */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex items-center text-sm font-medium text-gray-600 mb-3">
                <GaugeCircle size={16} className="mr-2" />
                <span>Environmental Impact 2024</span>
              </div>
              <div className="mb-2">
                <div className="text-sm text-gray-500">Energy Efficiency</div>
                <div className="font-bold text-lg">61.6 kWh/m²</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Paris Agreement Target</div>
                <div className="font-bold text-lg">70 kWh/m²</div>
              </div>
            </div>
            
            {/* EnergieKompas */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-red-500 font-bold text-lg">WEii</div>
                  <div className="text-blue-600 font-bold text-xl">EnergieKompas</div>
                </div>
              </div>
              
              {/* Energy efficiency ladder */}
              <div className="w-full">
                <div className="flex flex-col">
                  {/* Energy ladder component */}
                  <div className="h-40 relative">
                    <div className="absolute left-0 top-0 bottom-0 border-l-2 border-blue-500"></div>
                    <div className="absolute left-0 right-0 top-1/2 border-b border-gray-300 border-dashed"></div>
                  </div>
                  
                  {/* Energy rating indicators */}
                  <div className="flex justify-between mt-4">
                    {['G', 'F', 'E', 'D', 'C', 'B', 'A', 'A', 'A', 'A'].map((grade, index) => (
                      <div 
                        key={index} 
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                          index < 3 ? 'bg-red-500 text-white' : 
                          index < 6 ? 'bg-yellow-400 text-gray-800' : 
                          'bg-green-500 text-white'
                        }`}
                      >
                        {grade}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - 3/4 width */}
          <div className="col-span-3">
            {/* Electricity usage cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">Electricity 2022</div>
                <div className="font-bold text-xl">854,900 kWh</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">Electricity 2023</div>
                <div className="font-bold text-xl">1,026,582 kWh</div>
                <div className="flex items-center text-sm text-green-500 mt-1">
                  <ArrowUpRight size={16} />
                  <span>+20.1% vs 2022</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">Electricity 2024</div>
                <div className="font-bold text-xl">808,598 kWh</div>
                <div className="flex items-center text-sm text-red-500 mt-1">
                  <ArrowDownRight size={16} />
                  <span>-24.1% vs 2023</span>
                </div>
              </div>
            </div>
            
            {/* Monthly electricity chart */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="text-lg font-medium mb-4">Monthly Electricity Usage</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={electricityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => {
                      if (value === 0) return '0';
                      if (value === 30000) return '30000';
                      if (value === 60000) return '60000';
                      if (value === 90000) return '90000';
                      if (value === 120000) return '120000';
                      return '';
                    }}
                  />
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: 15 }} />
                  <Bar dataKey="2022" fill="#64748b" />
                  <Bar dataKey="2023" fill="#a3e635" />
                  <Bar dataKey="2024" fill="#d9f99d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Gas usage cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">Gas 2022</div>
                <div className="font-bold text-xl">108,311 m³</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">Gas 2023</div>
                <div className="font-bold text-xl">108,444 m³</div>
                <div className="flex items-center text-sm text-green-500 mt-1">
                  <ArrowUpRight size={16} />
                  <span>+0.1% vs 2022</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-sm text-gray-500">Gas 2024</div>
                <div className="font-bold text-xl">80,658 m³</div>
                <div className="flex items-center text-sm text-red-500 mt-1">
                  <ArrowDownRight size={16} />
                  <span>-38.8% vs 2023</span>
                </div>
              </div>
            </div>
            
            {/* Monthly gas chart */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-lg font-medium mb-4">Monthly Gas Usage</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={gasData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => {
                      if (value === 0) return '0';
                      if (value === 5500) return '5500';
                      if (value === 11000) return '11000';
                      if (value === 16500) return '16500';
                      if (value === 22000) return '22000';
                      return '';
                    }}
                  />
                  <Tooltip />
                  <Legend wrapperStyle={{ paddingTop: 15 }} />
                  <Bar dataKey="2022" fill="#64748b" />
                  <Bar dataKey="2023" fill="#a3e635" />
                  <Bar dataKey="2024" fill="#d9f99d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;