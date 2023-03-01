import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const CallControlCloseTrayIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path d="M10 6C9.72386 6 9.5 6.22386 9.5 6.5L9.5 12.2929L7.85355 10.6464C7.65829 10.4512 7.34171 10.4512 7.14645 10.6464C6.95118 10.8417 6.95118 11.1583 7.14645 11.3536L9.64645 13.8536C9.84171 14.0488 10.1583 14.0488 10.3536 13.8536L12.8536 11.3536C13.0488 11.1583 13.0488 10.8417 12.8536 10.6464C12.6583 10.4512 12.3417 10.4512 12.1464 10.6464L10.5 12.2929L10.5 6.5C10.5 6.22386 10.2761 6 10 6ZM2 14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H4C2.89543 4 2 4.89543 2 6V14ZM4 15C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5H16C16.5523 5 17 5.44771 17 6V14C17 14.5523 16.5523 15 16 15H4Z" />
    </svg>
  ),
  displayName: 'CallControlCloseTrayIcon',
});
