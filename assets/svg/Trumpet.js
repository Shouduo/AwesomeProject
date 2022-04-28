import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Trumpet = props => (
  <Svg
    width={18}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 5.5c2 1.5 2 4 0 5.5M15 3.5c2.5 2 2.5 6.5 0 9.5"
      stroke="#4E86F7"
    />
    <Path d="M0 6a1 1 0 0 1 1-1h4v6H1a1 1 0 0 1-1-1V6Z" fill="#4E86F7" />
    <Path d="m1 8 8.25-6.928v13.856L1 8Z" fill="#4E86F7" />
  </Svg>
);

export default Trumpet;
