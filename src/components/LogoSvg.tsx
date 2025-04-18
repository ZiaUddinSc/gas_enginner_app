import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const LogoSvg = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.width}
    viewBox="0 0 1358 1753"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M1322.63 565.5C1337.83 465.9 1278.96 359.333 1247.13 318.5C1251.13 346.5 1238.46 383.167 1231.63 398C1219.23 424.8 1189.46 461.167 1176.13 476C1140.13 511.6 1111.46 557.5 1101.63 576C1082.43 612.8 1084.96 669 1089.13 692.5C1097.53 745.7 1145.63 771 1168.63 777H1190.13C1283.73 748.6 1317.46 624.167 1322.63 565.5Z"
      fill="url(#paint0_linear_133_26)"
    />
    <Path
      d="M641.688 389.5V156C388.888 156 194.688 349 129.189 445.5C-34.8115 641.9 -8.47812 932 25.1885 1052.5C114.789 1380.5 417.855 1521.5 558.189 1551C807.789 1613 1047.52 1489.83 1136.19 1420.5V1753H1357.19V778.5H701.689V994H1136.19V1052.5C1050.99 1271.7 811.022 1328.5 701.689 1329.5C394.489 1305.9 270.022 1078.33 246.188 967.5C179.788 554.3 482.188 410 641.688 389.5Z"
      fill="white"
    />
    <Path
      d="M917.779 498C825.779 622.4 894.779 734.167 940.279 773.5H865.779C823.379 741.9 795.446 677.333 787.279 650C772.479 594.8 793.446 518 805.779 486.5C823.779 432.5 893.279 328 926.779 282.5L1049.78 110.5C1076.18 71.7 1098.11 20.6667 1105.78 0C1171.38 66.8 1158.11 155.833 1143.28 192C1133.28 236.4 1047.45 341.167 1005.78 386.5C974.179 416.5 933.945 473.333 917.779 498Z"
      fill="url(#paint1_linear_133_26)"
    />
    <Path
      d="M1040.37 574.906C973.073 665.934 1023.54 747.718 1056.83 776.5H1002.33C971.318 753.377 950.886 706.131 944.912 686.13C934.086 645.738 949.423 589.541 958.444 566.491C971.61 526.977 1022.45 450.51 1046.95 417.216L1136.92 291.357C1156.23 262.966 1172.27 225.623 1177.88 210.5C1225.87 259.38 1216.16 324.529 1205.31 350.994C1198 383.483 1135.21 460.145 1104.74 493.317C1081.62 515.269 1052.19 556.856 1040.37 574.906Z"
      fill="url(#paint2_linear_133_26)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_133_26"
        x1="1205.19"
        y1="548"
        x2="1205.64"
        y2="777"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EF9902" />
        <Stop offset="1" stopColor="#E63C12" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_133_26"
        x1="969.188"
        y1="221.5"
        x2="968.801"
        y2="773.5"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E63912" />
        <Stop offset="1" stopColor="#ED8503" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_133_26"
        x1="1077.97"
        y1="372.58"
        x2="1077.69"
        y2="776.5"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E63912" />
        <Stop offset="1" stopColor="#ED8503" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LogoSvg;
