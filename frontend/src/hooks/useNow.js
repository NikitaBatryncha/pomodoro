import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function useNow (interval, enabled, cb) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  const [now, setNow] = useState(Date.now());

  useLayoutEffect(() => {
    if (!enabled) {
      return
    }

    setNow(Date.now());
    cbRef.current?.(Date.now());

    const int = setInterval(() => {
      setNow(Date.now());
      cbRef.current?.(Date.now());
    }, interval)

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);

  return now
}
