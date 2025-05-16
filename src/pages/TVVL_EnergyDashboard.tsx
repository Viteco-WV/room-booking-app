import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Leaf } from 'lucide-react';
import { ReactComponent as WeiiChart } from '../assets/icons/energiekompas.svg';
import { ReactComponent as TvvlLogo } from '../assets/icons/tvvl-logo.svg';
import woerdenImage from '../assets/images/woerden.png';

// Monthly data for electricity usage
const electricityData = [
  { month: 'Jan.', '2022': 65000, '2023': 82000, '2024': 85000, '2025': 88000 },
  { month: 'Feb.', '2022': 55000, '2023': 85000, '2024': 72000, '2025': 75000 },
  { month: 'Mrt.', '2022': 62000, '2023': 75000, '2024': 72000, '2025': 74000 },
  { month: 'Apr.', '2022': 58000, '2023': 70000, '2024': 68000, '2025': 70000 },
  { month: 'Mei', '2022': 72000, '2023': 85000, '2024': 85000, '2025': 87000 },
  { month: 'Jun.', '2022': 75000, '2023': 110000, '2024': 85000, '2025': 0 },
  { month: 'Jul.', '2022': 85000, '2023': 110000, '2024': 95000, '2025': 0 },
  { month: 'Aug.', '2022': 92000, '2023': 92000, '2024': 88000, '2025': 0 },
  { month: 'Sep.', '2022': 70000, '2023': 85000, '2024': 85000, '2025': 0 },
  { month: 'Oct.', '2022': 65000, '2023': 85000, '2024': 35000, '2025': 0 },
  { month: 'Nov.', '2022': 60000, '2023': 80000, '2024': 80000, '2025': 0 },
  { month: 'Dec.', '2022': 62000, '2023': 72000, '2024': 72000, '2025': 0 },
];

// Monthly data for gas usage
const gasData = [
  { month: 'Jan', '2022': 17000, '2023': 22000, '2024': 18000, '2025': 16000 },
  { month: 'Feb', '2022': 14000, '2023': 15000, '2024': 13000, '2025': 12000 },
  { month: 'Mar', '2022': 12000, '2023': 14000, '2024': 10000, '2025': 9000 },
  { month: 'Apr', '2022': 9500, '2023': 12000, '2024': 8000, '2025': 7500 },
  { month: 'May', '2022': 5000, '2023': 7000, '2024': 4000, '2025': 3500 },
  { month: 'Jun', '2022': 3000, '2023': 4000, '2024': 1500, '2025': 1200 },
  { month: 'Jul', '2022': 2000, '2023': 1500, '2024': 1000, '2025': 0 },
  { month: 'Aug', '2022': 1500, '2023': 1500, '2024': 1000, '2025': 0 },
  { month: 'Sep', '2022': 2500, '2023': 3000, '2024': 2000, '2025': 0 },
  { month: 'Oct', '2022': 8000, '2023': 7000, '2024': 5000, '2025': 0 },
  { month: 'Nov', '2022': 12000, '2023': 11000, '2024': 11000, '2025': 0 },
  { month: 'Dec', '2022': 19000, '2023': 17000, '2024': 11000, '2025': 0 },
];

const EnergyDashboard = () => {
  return (
    <div className="p-6 font-sans text-gray-800" style={{ backgroundColor: '#f5fae2' }}>
      <div className="max-w-10xl mx-auto">

        {/* Consistent container for all content */}
        <div className="flex flex-col w-full">

          {/* Main content grid - maintaining the 1/4 to 3/4 split ratio */}
          <div className="flex flex-wrap w-full mb-6">
            
            {/* Left column - 1/4 width */}
            <div className="w-1/5 p-4">

              <div className="bg-white rounded-lg shadow p-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-gray-200 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">Korenmolenlaan 4</div>
                    <div className="text-sm text-gray-500">Woerden, NL</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-green-800 font-bold p-2 flex items-center justify-center text-xl">
                    <TvvlLogo style={{ width: '90', height: 'auto' }} />
                  </div>
                </div>
              </div>


              {/* Building image */}
              <div className="bg-white rounded-lg shadow mb-6 overflow-hidden flex justify-center items-center" style={{ height: '278px' }}>
                <img 
                  src={woerdenImage}
                  alt="Woerden kantoor" 
                  className="object-contain"
                  style={{ 
                    transform: 'scale(1.2)',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              </div>
              
              {/* Environmental impact */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex justify-center items-center text-sm font-bold text-gray-800 mb-3">
                  <Leaf size={14} className="mr-2" />
                  <span>Environmental Impact 2024</span>
                </div>
                <div className="flex">
                  <div className="w-1/2 bg-blue-50 rounded-lg p-2 ml-2 h-14 font-bold text-gray-800 flex items-center justify-center">
                    {/* Inhoud van de blauwe box */}
                    <div className="mb-2 pt-2">
                      <div className="text-xs text-gray-500 mb-1">Energy efficiëntie</div>
                      <div className="text-base font-bold">140 kWh/m²</div>
                    </div>
                  </div>
                  <div className="w-1/2 bg-green-50 rounded-lg p-2 ml-2 h-14 font-bold text-gray-800 flex items-center justify-center">
                    {/* Inhoud van de blauwe box */}
                    <div className="mb-2 pt-2">
                      <div className="text-xs text-gray-500  mb-1">Paris Agreement Target</div>
                      <div className="text-base font-bold">70 kWh/m²</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WEII chart */}
              <div className="bg-white rounded-lg shadow mb-6 p-4 flex justify-center items-center" style={{ height: "425px" }}>
                <WeiiChart style={{ width: 'auto', height: 'auto' }} />
              </div>

            </div>

            {/* Right column - 3/4 width */}
            <div className="w-4/5 p-4">

            <div className="bg-white rounded-lg shadow p-4 mb-6 grid grid-cols-4 gap-4">
            <div>
                <div className="text-sm text-gray-600 mb-1">Energielabel</div>
                  <div className="flex justify-center">
                    <div className="relative inline-flex">
                      {/* Main label with all corners rounded */}
                      <div 
                        style={{ backgroundColor: '#00a651' }}
                        className="text-white font-semibold text-xs px-2 py-0.5 flex items-center justify-center rounded-md"
                      >
                        A+
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Totale CO₂ emissie</div>
                  <div className="font-semibold">531.0 tons</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Bouwjaar</div>
                  <div className="font-semibold">2001</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Vloeroppervlak</div>
                  <div className="font-semibold">13.132m²</div>
                </div>
              </div>


              {/* Electricity usage cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                
              <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Elektra 2022</div>
                  <div className="font-bold text-xl">1.026.582 kWh</div>
                  <div className="flex items-center justify-center text-sm text-green-500 mt-1 w-full">
                    <ArrowUpRight size={16} className="mr-1" />
                    <span>+20.1% vs 2021</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Elektra 2023</div>
                  <div className="font-bold text-xl">1.026.582 kWh</div>
                  <div className="flex items-center justify-center text-sm text-green-500 mt-1 w-full">
                    <ArrowUpRight size={16} className="mr-1" />
                    <span>+20.1% vs 2022</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Elektra 2024</div>
                  <div className="font-bold text-xl">1.026.582 kWh</div>
                  <div className="flex items-center justify-center text-sm text-green-500 mt-1 w-full">
                    <ArrowUpRight size={16} className="mr-1" />
                    <span>+20.1% vs 2023</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Elektra 2025</div>
                  <div className="font-bold text-xl">854.900 kWh</div>
                </div>

              </div>
              
              {/* Monthly electricity chart */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="text-lg mb-4">
                  <span className="font-bold">Maandelijks elektraverbruik</span> [kWh]
                </div>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={electricityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" 
                      tick={{ fontSize: 15 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      ticks={[0, 40000, 80000, 120000]} // Only 4 ticks = 3 grid lines
                      tickFormatter={(value) => value.toString()}
                      domain={[0, 'dataMax']}
                      tick={{ fontSize: 15 }}
                    />
                    <Tooltip />
                    <Legend 
                      wrapperStyle={{ paddingTop: 15 }} 
                      formatter={(value, entry, index) => {
                        return <span style={{fontSize: 14, color: '#000000' }}>{value}</span>;
                      }}
                    />
                    <Bar dataKey="2022" fill="#4d4d4d" />
                    <Bar dataKey="2023" fill="#5b6b05" />
                    <Bar dataKey="2024" fill="#bad818" />
                    <Bar dataKey="2025" fill="#e1fa77" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              {/* Gas usage cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">

                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Gas 2022</div>
                  <div className="font-bold text-xl">1,026,582 m³</div>
                  <div className="flex items-center justify-center text-sm text-green-500 mt-1 w-full">
                    <ArrowUpRight size={16} className="mr-1" />
                    <span>+0.1% vs 2021</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Gas 2023</div>
                  <div className="font-bold text-xl">1,026,582 m³</div>
                  <div className="flex items-center justify-center text-sm text-green-500 mt-1 w-full">
                    <ArrowUpRight size={16} className="mr-1" />
                    <span>+0.1% vs 2022</span>
                  </div>
                </div>


                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <div className="text-sm text-gray-600">Gas 2024</div>
                  <div className="font-bold text-xl">80,658 m³</div>
                  <div className="flex items-center justify-center text-sm text-red-500 mt-1 w-full">
                    <ArrowDownRight size={16} className="mr-1"/>
                    <span>-38.8% vs 2023</span>
                  </div>
                </div>
              
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="text-sm text-gray-600">Gas 2025</div>
                  <div className="font-bold text-xl">108,311 m³</div>
                </div>
              
              </div>              
              
              {/* Monthly gas chart */}
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-lg mb-4">
                  <span className="font-bold">Maandelijks gasverbruik</span> [m3]
                </div>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={gasData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" 
                      tick={{ fontSize: 15 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      ticks={[0, 7500, 15000, 22500]} // Only 4 ticks = 3 grid lines
                      tickFormatter={(value) => value.toString()}
                      domain={[0, 'dataMax']}
                      tick={{ fontSize: 15 }}
                    />
                    <Tooltip />
                    <Legend 
                      wrapperStyle={{ paddingTop: 15 }} 
                      formatter={(value, entry, index) => {
                        return <span style={{fontSize: 14, color: '#000000' }}>{value}</span>;
                      }}
                    />
                    <Bar dataKey="2022" fill="#4d4d4d" />
                    <Bar dataKey="2023" fill="#5b6b05" />
                    <Bar dataKey="2024" fill="#bad818" />
                    <Bar dataKey="2025" fill="#e1fa77" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;