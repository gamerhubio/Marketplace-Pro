import { useEffect, useRef } from "react";

export function usePrevious(value: any) {
  const ref = useRef<string | number>();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  }, [value]); // run when the value of 'value' changes
  return ref.current;
}
export default usePrevious;
