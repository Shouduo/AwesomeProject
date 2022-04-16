import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Home = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6H3.414a1 1 0 0 1-.707-1.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586A1 1 0 0 1 20.586 14H18v6ZM12 4.697 3.897 12.8H7.2v7H11V17h2v2.8h3.8v-7h3.303L12 4.697Z"
      fill="currentColor"
      fillOpacity={0.9}
    />
  </Svg>
);

export default Home;
