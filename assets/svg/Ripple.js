import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Ripple = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.667 8.833a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-2 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm-6.5 3a3 3 0 1 0-.001-6 3 3 0 0 0 0 6Z"
      fill="currentColor"
    />
  </Svg>
);

export default Ripple;
