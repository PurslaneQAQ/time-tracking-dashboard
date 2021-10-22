import React from 'react';
import { TIME_FRAME } from '../consts';
import Activity, { ActivityProps } from './activity';

type ActivityGridProps = {
  activities: ActivityProps[],
  timeframe: TIME_FRAME;
}

const ActivityGrid:React.FC<ActivityGridProps> = ({ activities, timeframe }) => (
  <div className="grid lg:grid-cols-3">
    {
      activities.map((activityProps:ActivityProps) => (
        <Activity key={activityProps.title} {...activityProps} timeframe={timeframe} />
      ))
    }
  </div>
);

export default ActivityGrid;
