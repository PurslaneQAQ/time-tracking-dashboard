import React from 'react';

import {
  ACTIVITY_TYPE, ActivityIcons, EllipsisIcon, TIME_FRAME,
  timeframeData, timeFrameLabel, ActivityColors,
} from '../consts';

export type ActivityProps = {
  activity: ACTIVITY_TYPE,
  title: string;
  data: timeframeData;
};

export type TFType = {
  timeframe: TIME_FRAME;
};

const Activity:React.FC<ActivityProps&TFType> = ({
  activity, title, timeframe, data,
}) => (
  <div className="Card-group">
    <div
      className={`Card bg-${ActivityColors[activity]} flex items-center justify-end overflow-hidden`}
      style={{ height: '68px' }}
    >
      <img alt={title} src={ActivityIcons[activity]} className="pb-4 -mr-4" />
    </div>
    <div className="Card bg-DarkBlue cursor-pointer hover:bg-DesaturatedBlue transition">
      <div className="flex justify-between items-center mb-4 lg:mb-8">
        <div>{title}</div>
        <div>
          <img alt={title} src={EllipsisIcon} />
        </div>
      </div>
      <div className="flex justify-between items-center lg:flex-col lg:items-start hover:bg-purple">
        <div className="Primary-bold lg:mb-4">
          {`${data[timeframe].current}hrs`}
        </div>
        <div className="Quaternary">
          {`Last ${timeFrameLabel[timeframe]} - ${data[timeframe].previous}hrs`}
        </div>
      </div>
    </div>
  </div>
);

export default Activity;
