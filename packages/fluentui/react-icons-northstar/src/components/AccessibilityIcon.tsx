import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const AccessibilityIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" viewBox="2 2 16 16" className={classes.svg} focusable="false">
      <path d="M10 2C8.61929 2 7.5 3.11929 7.5 4.5C7.5 4.74818 7.53616 4.98791 7.60351 5.21422L5.36472 4.36707C4.49509 4.03801 3.52015 4.44834 3.14755 5.30023C2.74892 6.21165 3.19137 7.27142 4.11972 7.62884L7 8.73776V11.138L5.35877 15.6632C5.04049 16.5407 5.46822 17.5135 6.33008 17.8721C7.24829 18.2542 8.2998 17.7938 8.64194 16.86L10.0012 13.15L11.3652 16.8532C11.7193 17.8148 12.8219 18.2656 13.7483 17.8278C14.5627 17.4429 14.9503 16.5014 14.643 15.6547L13 11.1278V8.73462L15.8683 7.64715C16.7449 7.3148 17.2051 6.35189 16.9132 5.46104C16.6018 4.51061 15.5598 4.01263 14.6247 4.36724L12.3972 5.2119C12.4641 4.98627 12.5 4.74733 12.5 4.5C12.5 3.11929 11.3807 2 10 2ZM8.5 4.5C8.5 3.67157 9.17157 3 10 3C10.8284 3 11.5 3.67157 11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5ZM14.9792 5.30228C15.3812 5.14985 15.8291 5.3639 15.9629 5.77243C16.0884 6.15535 15.8906 6.56924 15.5138 6.71209L12.3228 7.92194C12.1285 7.99559 12 8.1817 12 8.38946V11.2158C12 11.2739 12.0102 11.3317 12.03 11.3864L13.703 15.9959C13.8342 16.3574 13.6687 16.7594 13.321 16.9237C12.9255 17.1106 12.4547 16.9181 12.3035 16.5076L10.9335 12.7877C10.6139 11.9201 9.38646 11.9212 9.06838 12.7893L7.70298 16.516C7.55665 16.9154 7.10695 17.1122 6.71425 16.9488C6.34566 16.7954 6.16272 16.3794 6.29884 16.0041L7.97004 11.3963C7.98987 11.3417 8 11.284 8 11.2258V8.39449C8 8.18767 7.87266 8.00219 7.67965 7.92788L4.47901 6.69562C4.08247 6.54294 3.89348 6.09026 4.06375 5.70095C4.22291 5.33707 4.63935 5.16179 5.01081 5.30235L9.11449 6.85516C9.68517 7.0711 10.3151 7.07088 10.8857 6.85454L14.9792 5.30228Z" />
    </svg>
  ),
  displayName: 'AccessibilityIcon',
});
