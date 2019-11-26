import { touchFeedbackProps } from '../utils/comp/touch-feedback/shared';

export const listItemProps = {
  ...touchFeedbackProps,
  wrap: Boolean,
  arrow: String,
  error: Boolean,
  extra: String,
  thumb: String,
  clickable: Boolean,
  multipleLine: Boolean,
  contentStyle: null,
  briefClass: null,
  extraClass: null,
  contentClass: null,
  align: {
    type: String,
    default: 'middle'
  }
};
