import React from 'react';
import HeatMap from '@uiw/react-heat-map';

const value = [
  { date: '2016/01/11', count: 2 },
  { date: '2016/01/12', count: 20 },
  { date: '2016/01/13', count: 10 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
  { date: '2016/04/11', count: 2 },
  { date: '2016/05/01', count: 5 },
  { date: '2016/05/02', count: 5 },
  { date: '2016/05/04', count: 11 },
];

const Cal = () => {
  return (
    <div>
      <HeatMap
        rectSize={12}
        width={600}
        value={value} startDate={new Date('2016/01/01')}
        space={3}
        legendCellSize={0}
        rectProps={{
          rx: 2.5
        }}
      />
    </div>
  )
};

export default Cal;