import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CircleCheck = props => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm3.435-7.36a1 1 0 0 0-1.537-1.28l-1.93 2.317c-.348.416-.542.647-.698.788l-.006.006-.006-.005c-.168-.127-.383-.339-.766-.722l-.452-.451a1 1 0 0 0-1.414 1.414l.452.451.04.041c.327.327.641.641.933.862.328.248.756.48 1.306.456.55-.025.955-.296 1.259-.572.27-.247.555-.588.85-.943l.038-.044 1.93-2.318Z"
      fill="currentColor"
    />
  </Svg>
);

export default CircleCheck;
