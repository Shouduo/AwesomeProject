import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LeftArrow = props => (
  <Svg
    width={8}
    height={18}
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 19.438 8.955 20.5 1.28 12.701a1 1 0 0 1 0-1.402L8.955 3.5 10 4.563 2.682 12 10 19.438Z"
      fill="currentColor"
      fillOpacity={0.9}
    />
  </Svg>
);

export default LeftArrow;
