import avatar from './images/image-jeremy.png';

export enum ACTIVITY_TYPE {
  WORK,
  PLAY,
  STUDY,
  EXERCISE,
  SOCIAL,
  SELF_CARE,
}

export const ActivityIcons = {
  [ACTIVITY_TYPE.WORK]: require('./images/icon-work.svg'),
  [ACTIVITY_TYPE.PLAY]: require('./images/icon-play.svg'),
  [ACTIVITY_TYPE.STUDY]: require('./images/icon-study.svg'),
  [ACTIVITY_TYPE.EXERCISE]: require('./images/icon-exercise.svg'),
  [ACTIVITY_TYPE.SOCIAL]: require('./images/icon-social.svg'),
  [ACTIVITY_TYPE.SELF_CARE]: require('./images/icon-self-care.svg'),
};

export const ActivityColors = {
  [ACTIVITY_TYPE.WORK]: 'LightOrange',
  [ACTIVITY_TYPE.PLAY]: 'SoftBlue',
  [ACTIVITY_TYPE.STUDY]: 'LightRed',
  [ACTIVITY_TYPE.EXERCISE]: 'LimeGreen',
  [ACTIVITY_TYPE.SOCIAL]: 'Violet',
  [ACTIVITY_TYPE.SELF_CARE]: 'SoftOrange',
};

export const EllipsisIcon = require('./images/icon-ellipsis.svg');

export const MockProfile = {
  avatar,
  userName: 'Jeremy Robson',
};

export enum TIME_FRAME {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export const timeFrameLabel = {
  [TIME_FRAME.DAILY]: 'Day',
  [TIME_FRAME.WEEKLY]: 'Week',
  [TIME_FRAME.MONTHLY]: 'Month',
};

export type timeframeData = Record<TIME_FRAME, {current:number, previous: number}>;
