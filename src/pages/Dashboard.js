import React from 'react';
import { Chart } from 'react-google-charts';

const Dashboard = ({ userData }) => {

  const languageData = [
    ['Language', 'Score'],
    ...Object.entries(userData.ranks.languages).map(([language, data]) => [language, data.score]),
  ];

  return (
    <div>
      <h2>Welcome, {userData.name}!</h2>

      <Chart
        width={'100%'}
        height={'300px'}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={languageData}
        options={{
          title: 'Language Ranks',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Score',
            minValue: 0,
          },
          vAxis: {
            title: 'Language',
          },
        }}
      />
    </div>
  );
}

export default Dashboard;
