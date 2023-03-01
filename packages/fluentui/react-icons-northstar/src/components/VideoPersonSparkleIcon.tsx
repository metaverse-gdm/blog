import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const VideoPersonSparkleIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      style={{ overflow: 'visible' }}
      className={classes.svg}
    >
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M3.75868 3.99999H16.4908C16.6887 3.9984 16.8849 4.03603 17.0682 4.1107C17.2514 4.18538 17.4181 4.29562 17.5586 4.43506C17.6991 4.57451 17.8106 4.7404 17.8867 4.92318C17.9628 5.10595 18.002 5.30199 18.002 5.49999V14.5C18.002 14.8978 17.844 15.2793 17.5629 15.5606C17.2817 15.842 16.9004 16 16.5028 16H3.50982C3.11221 16 2.73089 15.842 2.44973 15.5606C2.16858 15.2793 2.01063 14.8978 2.01063 14.5V9.88699C2.16793 9.95785 2.33789 9.99628 2.51036 9.99999C2.68224 9.9984 2.85209 9.96272 3.01009 9.89499V14.5C3.01009 14.6326 3.06274 14.7598 3.15645 14.8535C3.25017 14.9473 3.37728 15 3.50982 15H6.00846V13.5C6.00846 13.1022 6.16641 12.7206 6.44756 12.4393C6.72872 12.158 7.11004 12 7.50765 12H12.5049C12.9025 12 13.2839 12.158 13.565 12.4393C13.8462 12.7206 14.0041 13.1022 14.0041 13.5V15H16.5028C16.6353 15 16.7624 14.9473 16.8561 14.8535C16.9498 14.7598 17.0025 14.6326 17.0025 14.5V5.49999C17.0025 5.36738 16.9498 5.2402 16.8561 5.14643C16.7624 5.05267 16.6353 4.99999 16.5028 4.99999H4.30938C4.23485 4.97304 4.16676 4.9308 4.10949 4.87599C4.04605 4.81304 3.99843 4.73593 3.97057 4.65099L3.75868 3.99999ZM11.7614 6.73223C12.23 7.20107 12.4932 7.83696 12.4932 8.5C12.4932 9.16304 12.23 9.79893 11.7614 10.2678C11.2928 10.7366 10.6573 11 9.99458 11C9.33189 11 8.69635 10.7366 8.22777 10.2678C7.75918 9.79893 7.49593 9.16304 7.49593 8.5C7.49593 7.83696 7.75918 7.20107 8.22777 6.73223C8.69635 6.26339 9.33189 6 9.99458 6C10.6573 6 11.2928 6.26339 11.7614 6.73223ZM4.11876 9.32801C4.0838 9.34076 4.0535 9.36376 4.03181 9.39401C4.01091 9.42328 3.99909 9.45806 3.99783 9.49401C3.99789 9.53171 4.00978 9.56844 4.03181 9.59901C4.05322 9.62954 4.08362 9.65261 4.11876 9.66501L4.57851 9.81401C4.71816 9.86111 4.84505 9.93982 4.94932 10.044C5.05328 10.1481 5.13134 10.2752 5.17719 10.415L5.32611 10.874C5.33882 10.9096 5.36222 10.9403 5.39307 10.962C5.42224 10.983 5.45712 10.9945 5.49302 10.995C5.52889 10.9943 5.56371 10.9828 5.59296 10.962C5.62383 10.9405 5.64697 10.9097 5.65893 10.874L5.80885 10.415C5.85495 10.2756 5.93298 10.1489 6.03672 10.045C6.14098 9.94104 6.2679 9.86265 6.40752 9.81602L6.86627 9.66702C6.90192 9.65505 6.93276 9.6319 6.95423 9.60102C6.97609 9.57041 6.98764 9.53363 6.98721 9.49602C6.98667 9.4601 6.97516 9.4252 6.95423 9.39602C6.93973 9.3753 6.92099 9.35791 6.89926 9.34501C6.88884 9.33883 6.87778 9.3338 6.86627 9.33002H6.85728L6.39853 9.18102C6.25895 9.13477 6.13202 9.05672 6.02773 8.95301C5.92381 8.8487 5.84547 8.72172 5.79885 8.58202L5.64994 8.12301C5.64189 8.10059 5.62968 8.0799 5.61395 8.06202C5.60517 8.05204 5.59509 8.04329 5.58397 8.03601C5.5548 8.01494 5.51999 8.00309 5.48402 8.00201C5.4611 8.00227 5.43841 8.00667 5.41706 8.01501C5.40368 8.02061 5.39094 8.02766 5.37908 8.03601C5.34857 8.05743 5.32551 8.08785 5.31312 8.12301L5.1642 8.58202C5.1414 8.6501 5.11124 8.71549 5.07425 8.77702C5.03596 8.83991 4.9907 8.89828 4.93932 8.95102C4.83709 9.05483 4.71223 9.13355 4.57452 9.18102L4.11876 9.32801ZM2.4986 9.00002C2.43633 9.0002 2.37555 8.98097 2.32469 8.94501C2.27446 8.90935 2.23642 8.85907 2.21575 8.80102L1.96689 8.03601C1.91109 7.86589 1.82658 7.70659 1.71702 7.56502C1.67694 7.51294 1.63354 7.4635 1.58709 7.41702C1.41345 7.24294 1.20162 7.1118 0.968428 7.03402L0.203844 6.78502C0.144951 6.76443 0.0939418 6.72598 0.0579229 6.67501C0.021432 6.62397 0.00185728 6.56277 0.00195348 6.50002C0.00206578 6.4376 0.0216305 6.37678 0.0579229 6.32602C0.0939418 6.27505 0.144951 6.2366 0.203844 6.21601L0.968428 5.96701C1.19831 5.88792 1.40668 5.75646 1.5771 5.58302C1.74293 5.41475 1.86895 5.21143 1.9459 4.98801L1.9519 4.96902L2.20076 4.20402C2.22134 4.14509 2.25977 4.09405 2.3107 4.05802C2.36171 4.02151 2.42289 4.00192 2.48561 4.00201C2.54833 4.00192 2.6095 4.02151 2.66051 4.05802C2.71144 4.09405 2.74988 4.14509 2.77045 4.20402L3.01932 4.96902C3.04652 5.04433 3.07995 5.11725 3.11926 5.18702C3.19065 5.33417 3.28475 5.46915 3.39811 5.58702C3.57165 5.76026 3.78312 5.89071 4.01577 5.96802L4.78036 6.21701H4.79535C4.85456 6.23804 4.90586 6.27679 4.94227 6.32801C4.97821 6.3789 4.99742 6.43971 4.99724 6.50201C4.99763 6.56466 4.97841 6.62586 4.94227 6.67702C4.90599 6.72814 4.85461 6.76661 4.79535 6.78702L4.03077 7.03601C3.79794 7.11295 3.58639 7.24345 3.4131 7.41702C3.24011 7.59039 3.10975 7.80161 3.03231 8.03402L2.78344 8.79902L2.77645 8.81802C2.76212 8.85035 2.74253 8.88009 2.71848 8.90602C2.70443 8.92007 2.6894 8.9331 2.6735 8.94501C2.62237 8.98117 2.56121 9.0004 2.4986 9.00002Z"
      />
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M3.75868 3.99999H16.4908C16.6887 3.9984 16.8849 4.03603 17.0682 4.1107C17.2514 4.18538 17.4181 4.29562 17.5586 4.43506C17.6991 4.57451 17.8106 4.7404 17.8867 4.92318C17.9628 5.10595 18.002 5.30199 18.002 5.49999V14.5C18.002 14.8978 17.844 15.2793 17.5629 15.5606C17.2817 15.842 16.9004 16 16.5028 16H3.50982C3.11221 16 2.73089 15.842 2.44973 15.5606C2.16858 15.2793 2.01063 14.8978 2.01063 14.5V9.88699C2.16793 9.95785 2.33789 9.99628 2.51036 9.99999C2.68224 9.9984 2.85209 9.96272 3.01009 9.89499V14.5C3.01009 14.6326 3.06274 14.7598 3.15645 14.8535C3.25017 14.9473 3.37728 15 3.50982 15H6.00846V13.5C6.00846 13.1022 6.16641 12.7206 6.44756 12.4393C6.72872 12.158 7.11004 12 7.50765 12H12.5049C12.9025 12 13.2839 12.158 13.565 12.4393C13.8462 12.7206 14.0041 13.1022 14.0041 13.5V15H16.5028C16.6353 15 16.7624 14.9473 16.8561 14.8535C16.9498 14.7598 17.0025 14.6326 17.0025 14.5V5.49999C17.0025 5.36738 16.9498 5.2402 16.8561 5.14643C16.7624 5.05267 16.6353 4.99999 16.5028 4.99999H4.30938C4.23485 4.97304 4.16676 4.9308 4.10949 4.87599C4.04605 4.81304 3.99843 4.73593 3.97057 4.65099L3.75868 3.99999ZM6.99593 15H12.9927V13.5C12.9927 13.3674 12.94 13.2402 12.8463 13.1464C12.7526 13.0527 12.6255 13 12.4929 13H7.49566C7.36312 13 7.23601 13.0527 7.14229 13.1464C7.04858 13.2402 6.99593 13.3674 6.99593 13.5V15ZM11.7614 6.73223C12.23 7.20107 12.4932 7.83696 12.4932 8.5C12.4932 9.16304 12.23 9.79893 11.7614 10.2678C11.2928 10.7366 10.6573 11 9.99458 11C9.33189 11 8.69635 10.7366 8.22777 10.2678C7.75918 9.79893 7.49593 9.16304 7.49593 8.5C7.49593 7.83696 7.75918 7.20107 8.22777 6.73223C8.69635 6.26339 9.33189 6 9.99458 6C10.6573 6 11.2928 6.26339 11.7614 6.73223ZM8.93449 7.43934C8.65334 7.72064 8.49539 8.10218 8.49539 8.5C8.49539 8.89782 8.65334 9.27936 8.93449 9.56066C9.21564 9.84196 9.59697 10 9.99458 10C10.3922 10 10.7735 9.84196 11.0547 9.56066C11.3358 9.27936 11.4938 8.89782 11.4938 8.5C11.4938 8.10218 11.3358 7.72064 11.0547 7.43934C10.7735 7.15804 10.3922 7 9.99458 7C9.59697 7 9.21564 7.15804 8.93449 7.43934ZM4.11876 9.32801C4.0838 9.34076 4.0535 9.36376 4.03181 9.39401C4.01091 9.42328 3.99909 9.45806 3.99783 9.49401C3.99789 9.53171 4.00978 9.56844 4.03181 9.59901C4.05322 9.62954 4.08362 9.65261 4.11876 9.66501L4.57851 9.81401C4.71816 9.86111 4.84505 9.93982 4.94932 10.044C5.05328 10.1481 5.13134 10.2752 5.17719 10.415L5.32611 10.874C5.33882 10.9096 5.36222 10.9403 5.39307 10.962C5.42224 10.983 5.45712 10.9945 5.49302 10.995C5.52889 10.9943 5.56371 10.9828 5.59296 10.962C5.62383 10.9405 5.64697 10.9097 5.65893 10.874L5.80885 10.415C5.85495 10.2756 5.93298 10.1489 6.03672 10.045C6.14098 9.94104 6.2679 9.86265 6.40752 9.81602L6.86627 9.66702C6.90192 9.65505 6.93276 9.6319 6.95423 9.60102C6.97609 9.57041 6.98764 9.53363 6.98721 9.49602C6.98667 9.4601 6.97516 9.4252 6.95423 9.39602C6.93973 9.3753 6.92099 9.35791 6.89926 9.34501C6.88884 9.33883 6.87778 9.3338 6.86627 9.33002H6.85728L6.39853 9.18102C6.25895 9.13477 6.13202 9.05672 6.02773 8.95301C5.92381 8.8487 5.84547 8.72172 5.79885 8.58202L5.64994 8.12301C5.64189 8.10059 5.62968 8.0799 5.61395 8.06202C5.60517 8.05204 5.59509 8.04329 5.58397 8.03601C5.5548 8.01494 5.51999 8.00309 5.48402 8.00201C5.4611 8.00227 5.43841 8.00667 5.41706 8.01501C5.40368 8.02061 5.39094 8.02766 5.37908 8.03601C5.34857 8.05743 5.32551 8.08785 5.31312 8.12301L5.1642 8.58202C5.1414 8.6501 5.11124 8.71549 5.07425 8.77702C5.03596 8.83991 4.9907 8.89828 4.93932 8.95102C4.83709 9.05483 4.71223 9.13355 4.57452 9.18102L4.11876 9.32801ZM2.4986 9.00002C2.43633 9.0002 2.37555 8.98097 2.32469 8.94501C2.27446 8.90935 2.23642 8.85907 2.21575 8.80102L1.96689 8.03601C1.91109 7.86589 1.82658 7.70659 1.71702 7.56502C1.67694 7.51294 1.63354 7.4635 1.58709 7.41702C1.41345 7.24294 1.20162 7.1118 0.968428 7.03402L0.203844 6.78502C0.144951 6.76443 0.0939418 6.72598 0.0579229 6.67501C0.021432 6.62397 0.00185728 6.56277 0.00195348 6.50002C0.00206578 6.4376 0.0216305 6.37678 0.0579229 6.32602C0.0939418 6.27505 0.144951 6.2366 0.203844 6.21601L0.968428 5.96701C1.19831 5.88792 1.40668 5.75646 1.5771 5.58302C1.74293 5.41475 1.86895 5.21143 1.9459 4.98801L1.9519 4.96902L2.20076 4.20402C2.22134 4.14509 2.25977 4.09405 2.3107 4.05802C2.36171 4.02151 2.42289 4.00192 2.48561 4.00201C2.54833 4.00192 2.6095 4.02151 2.66051 4.05802C2.71144 4.09405 2.74988 4.14509 2.77045 4.20402L3.01932 4.96902C3.04652 5.04433 3.07995 5.11725 3.11926 5.18702C3.19065 5.33417 3.28475 5.46915 3.39811 5.58702C3.57165 5.76026 3.78312 5.89071 4.01577 5.96802L4.78036 6.21701H4.79535C4.85456 6.23804 4.90586 6.27679 4.94227 6.32801C4.97821 6.3789 4.99742 6.43971 4.99724 6.50201C4.99763 6.56466 4.97841 6.62586 4.94227 6.67702C4.90599 6.72814 4.85461 6.76661 4.79535 6.78702L4.03077 7.03601C3.79794 7.11295 3.58639 7.24345 3.4131 7.41702C3.24011 7.59039 3.10975 7.80161 3.03231 8.03402L2.78344 8.79902L2.77645 8.81802C2.76212 8.85035 2.74253 8.88009 2.71848 8.90602C2.70443 8.92007 2.6894 8.9331 2.6735 8.94501C2.62237 8.98117 2.56121 9.0004 2.4986 9.00002Z"
      />
    </svg>
  ),
  displayName: 'VideoPersonSparkleIcon',
});
