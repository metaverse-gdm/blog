import * as React from 'react';

/**
 * @internal
 */
export const usePrevious = <ValueType = unknown>(value: ValueType) => {
  const ref = React.useRef<ValueType | null>(null);
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
