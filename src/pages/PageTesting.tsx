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

// TVVL Logo Component
const TvvlLogo = ({ width = "100%", height = "auto" }) => {
  return (
    <svg 
      width={width}
      height={height}
      viewBox="15.2 220.5 610 202.4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style>
        {`
          .st0{fill:#C8D419;}
          .st1{fill:#343233;}
        `}
      </style>
      <polygon className="st0" points="20.2,416.3 74.2,416.3 80.7,322.2 35.5,304.8" />
      <polygon className="st0" points="92.8,326.8 115.8,335.7 113.5,416.4 86.4,416.3" />
      <polygon className="st0" points="125.7,416.4 217.1,416.4 197.9,297.3 128.2,335.2" />
      <polygon className="st1" points="81.6,309.3 41.5,293.9 87.2,230.9" />
      <polygon className="st1" points="99.9,225.5 93.7,313.9 121.7,324.7 192.1,286.4" />
      <polygon className="st1" points="243.7,310.6 243.7,326.6 275,326.6 275,417.9 294.5,417.9 294.5,326.6 323.4,326.6 328.4,310.6" />
      <polygon className="st1" points="564.6,310.6 564.6,417.9 620.2,417.9 620.2,402 584.1,402 584.1,310.6" />
      <g>
        <path className="st1" d="M337,310.6h23.4l27.1,59.2c2.1-6,26.8-59.2,26.8-59.2h23.3l-50.2,107.2L337,310.6z" />
        <path className="st1" d="M448.7,310.6h23.4l27.1,59.2c2.1-6,26.8-59.2,26.8-59.2h23.3l-50.2,107.2L448.7,310.6z" />
      </g>
    </svg>
  );
};

const Dashboard = () => {
  // Sample data
  const data = {
    electricity: {
      2022: 854900,
      2023: 1026582,
      2024: 808598
    },
    gas: {
      2022: 108311,
      2023: 108444, 
      2024: 80658
    },
    efficiency: 61.6,
    target: 70
  };

  // CSS styles defined inline
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      width: '100%',
      padding: '24px',
      backgroundColor: 'white',
      gap: '32px'
    },
    dashboardSection: {
      display: 'flex',
      width: '100%',
      flex: 1
    },
    sidebar: {
      width: '25%',
      paddingRight: '16px',
      height: '100%'
    },
    buildingHeader: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    buildingInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    buildingIcon: {
      padding: '8px',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buildingDetails: {
      display: 'flex',
      flexDirection: 'column' as 'column'
    },
    buildingName: {
      fontWeight: 600
    },
    buildingLocation: {
      fontSize: '14px',
      color: '#6b7280'
    },
    tvvlLogo: {
      backgroundColor: '#fcd34d',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
      height: '40px'
    },
    buildingImage: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '16px'
    },
    imageStyle: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover' as 'cover'
    },
    environmentalCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      fontWeight: 500,
      color: '#6b7280',
      marginBottom: '12px'
    },
    metricContainer: {
      marginBottom: '8px'
    },
    metricLabel: {
      fontSize: '14px',
      color: '#6b7280'
    },
    metricValue: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    mainContent: {
      width: '75%',
      paddingLeft: '16px'
    },
    buildingStats: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      marginBottom: '16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column' as 'column'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280'
    },
    statValue: {
      fontWeight: 600
    },
    specialValue: {
      fontWeight: 600,
      color: '#16a34a'
    },
    yearlyCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '16px'
    },
    yearlyCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px'
    },
    cardTitle: {
      fontSize: '14px',
      color: '#6b7280'
    },
    cardValue: {
      fontSize: '20px',
      fontWeight: 600
    },
    percentChange: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      marginTop: '4px'
    },
    percentPositive: {
      color: '#10b981'
    },
    percentNegative: {
      color: '#ef4444'
    },
    chartContainer: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      marginBottom: '16px'
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: 500,
      marginBottom: '16px'
    }
  };

  return (
    <div style={styles.container}>
      {/* FIRST DASHBOARD SECTION - ELECTRICITY */}
      <div style={styles.dashboardSection}>
        {/* Left sidebar */}
        <div style={styles.sidebar}>
          {/* Building header with location and logo */}
          <div style={styles.buildingHeader}>
            <div style={styles.buildingInfo}>
              <div style={styles.buildingIcon}>
                <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div style={styles.buildingDetails}>
                <div style={styles.buildingName}>Korenmolenlaan 4</div>
                <div style={styles.buildingLocation}>Woerden, NL</div>
              </div>
            </div>
            <div style={styles.tvvlLogo}>
              <TvvlLogo width="100%" height="100%" />
            </div>
          </div>

          {/* Building image */}
          <div style={styles.buildingImage}>
            <img 
              src="/api/placeholder/400/250"
              alt="Building" 
              style={styles.imageStyle}
            />
          </div>

          {/* Environmental Impact card */}
          <div style={styles.environmentalCard}>
            <div style={styles.cardHeader}>
              <GaugeCircle size={16} style={{ marginRight: '8px' }} />
              <span>Electricity Impact 2024</span>
            </div>
            
            <div style={styles.metricContainer}>
              <div style={styles.metricLabel}>Energy Efficiency</div>
              <div style={styles.metricValue}>{data.efficiency} kWh/m²</div>
            </div>
            
            <div style={styles.metricContainer}>
              <div style={styles.metricLabel}>Paris Agreement Target</div>
              <div style={styles.metricValue}>{data.target} kWh/m²</div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div style={styles.mainContent}>
          {/* Building stats */}
          <div style={styles.buildingStats}>
            <div style={styles.statItem}>
              <div style={styles.statLabel}>Energy Label</div>
              <div style={styles.specialValue}>A</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statLabel}>Total CO₂ Emissions</div>
              <div style={styles.statValue}>531.0 tons</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statLabel}>Construction Year</div>
              <div style={styles.statValue}>2,001</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statLabel}>Floor Area</div>
              <div style={styles.statValue}>13,132m²</div>
            </div>
          </div>
          
          {/* Electricity usage cards */}
          <div style={styles.yearlyCards}>
            <div style={styles.yearlyCard}>
              <div style={styles.cardTitle}>Electricity 2022</div>
              <div style={styles.cardValue}>{data.electricity[2022].toLocaleString()} kWh</div>
            </div>
            
            <div style={styles.yearlyCard}>
              <div style={styles.cardTitle}>Electricity 2023</div>
              <div style={styles.cardValue}>{data.electricity[2023].toLocaleString()} kWh</div>
              <div style={styles.percentChange}>
                <ArrowUpRight size={16} style={{ color: '#10b981' }} />
                <span style={styles.percentPositive}>+20.1% vs 2022</span>
              </div>
            </div>
            
            <div style={styles.yearlyCard}>
              <div style={styles.cardTitle}>Electricity 2024</div>
              <div style={styles.cardValue}>{data.electricity[2024].toLocaleString()} kWh</div>
              <div style={styles.percentChange}>
                <ArrowDownRight size={16} style={{ color: '#ef4444' }} />
                <span style={styles.percentNegative}>-24.1% vs 2023</span>
              </div>
            </div>
          </div>
          
          {/* Monthly electricity chart */}
          <div style={styles.chartContainer}>
            <div style={styles.chartTitle}>Monthly Electricity Usage</div>
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
        </div>
      </div>

      {/* SECOND DASHBOARD SECTION - GAS */}
      <div style={styles.dashboardSection}>
        {/* Left sidebar */}
        <div style={styles.sidebar}>
          {/* Building image */}
          <div style={styles.buildingImage}>
            <img 
              src="/api/placeholder/400/250"
              alt="Building" 
              style={styles.imageStyle}
            />
          </div>

          {/* Environmental Impact card */}
          <div style={styles.environmentalCard}>
            <div style={styles.cardHeader}>
              <GaugeCircle size={16} style={{ marginRight: '8px' }} />
              <span>Gas Impact 2024</span>
            </div>
            
            <div style={styles.metricContainer}>
              <div style={styles.metricLabel}>Energy Efficiency</div>
              <div style={styles.metricValue}>{data.efficiency} kWh/m²</div>
            </div>
            
            <div style={styles.metricContainer}>
              <div style={styles.metricLabel}>Paris Agreement Target</div>
              <div style={styles.metricValue}>{data.target} kWh/m²</div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div style={styles.mainContent}>          
          {/* Gas usage cards */}
          <div style={styles.yearlyCards}>
            <div style={styles.yearlyCard}>
              <div style={styles.cardTitle}>Gas 2022</div>
              <div style={styles.cardValue}>{data.gas[2022].toLocaleString()} m³</div>
            </div>
            
            <div style={styles.yearlyCard}>
              <div style={styles.cardTitle}>Gas 2023</div>
              <div style={styles.cardValue}>{data.gas[2023].toLocaleString()} m³</div>
              <div style={styles.percentChange}>
                <ArrowUpRight size={16} style={{ color: '#10b981' }} />
                <span style={styles.percentPositive}>+0.1% vs 2022</span>
              </div>
            </div>
            
            <div style={styles.yearlyCard}>
              <div style={styles.cardTitle}>Gas 2024</div>
              <div style={styles.cardValue}>{data.gas[2024].toLocaleString()} m³</div>
              <div style={styles.percentChange}>
                <ArrowDownRight size={16} style={{ color: '#ef4444' }} />
                <span style={styles.percentNegative}>-38.8% vs 2023</span>
              </div>
            </div>
          </div>
          
          {/* Monthly gas chart */}
          <div style={styles.chartContainer}>
            <div style={styles.chartTitle}>Monthly Gas Usage</div>
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
  );
};

export default Dashboard;