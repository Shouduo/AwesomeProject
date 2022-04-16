import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ThreeDots = props => (
  <Svg
    width={19}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.75 6.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm-5.25-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="currentColor"
    />
  </Svg>
);

export default ThreeDots;
