import React from 'react';
import { Card, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, Legend);

const TodayTasksCard = ({ isDarkMode }) => {
  const data = {
    labels: ['Pending', 'Done'],
    datasets: [
      {
        label: '# of Tasks',
        data: [4, 7],
        backgroundColor: ['#388E3C', '#2E7D32'],
        hoverBackgroundColor: ['#66BB6A', '#4CAF50'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Card sx={{ maxWidth: 307, height: 336, backgroundColor: isDarkMode ? '#424242' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
      <CardContent sx={{ padding: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h6" component="div" style={{ fontSize: '0.875rem' }}>
            Today Tasks
          </Typography>
          <Tooltip title="Information about today's tasks">
            <IconButton aria-label="info" sx={{ color: isDarkMode ? '#fff' : '#000', padding: '4px' }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
        <Typography variant="h5" color={isDarkMode ? 'text.secondary' : 'text.primary'} style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
          11
        </Typography>
        <div style={{ height: 200, position: 'relative' }}>
          <Doughnut data={data} options={{ cutout: '80%', responsive: true, maintainAspectRatio: false }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: 12 }}>
            <div style={{ width: 12, height: 12, backgroundColor: '#388E3C', borderRadius: '50%', marginRight: 6 }}></div>
            <Typography variant="body2" style={{ color: isDarkMode ? '#ccc' : '#000', fontSize: '0.875rem' }}>Pending</Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 12, height: 12, backgroundColor: '#2E7D32', borderRadius: '50%', marginRight: 6 }}></div>
            <Typography variant="body2" style={{ color: isDarkMode ? '#ccc' : '#000', fontSize: '0.875rem' }}>Done</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayTasksCard;
