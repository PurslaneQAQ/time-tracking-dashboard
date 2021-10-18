import React from 'react';
import { TIME_FRAME } from '../consts';

type TabsProps = {
  timeframe: TIME_FRAME;
  setTimeframe: (tf:TIME_FRAME) => void;
}

const Tabs:React.FC<TabsProps> = ({ timeframe, setTimeframe }) => (
  <div className="Card flex lg:flex-col justify-between bg-DarkBlue">
    {(Object.values(TIME_FRAME).map((tf) => (
      <div className={`${timeframe === tf ? 'Secondary' : 'Tertiary'} mt-2.5 -mb-2.5`} key={tf}>
        <button
          className="py-2.5 w-16 text-left hover:text-white transition"
          type="button"
          onClick={() => setTimeframe(tf as TIME_FRAME)}
        >
          {tf.substr(0, 1).toLocaleUpperCase() + tf.substr(1)}
        </button>
      </div>
    )))}
  </div>
);

export default Tabs;
