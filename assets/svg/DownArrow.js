import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DownArrow = props => (
  <Svg
    width={10}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m1 1 3.293 3.293a1 1 0 0 0 1.414 0L9 1"
      stroke="#000"
      strokeLinecap="round"
    />
  </Svg>
);

export default DownArrow;
