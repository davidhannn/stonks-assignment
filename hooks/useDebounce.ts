import { DependencyList, useCallback, useMemo } from "react";
import debounce from "lodash/debounce";
import { DebounceSettings } from "lodash";

type DebounceProps<T> = {
  func: T;
  wait?: number;
  options?: DebounceSettings;
  dependency?: DependencyList;
};

const useDebounce = <T extends (...args: any) => any>({
  func,
  options,
  wait = 200,
  dependency = [],
}: DebounceProps<T>) => {
  return useMemo(() => debounce(func, wait, options), dependency);
};

export default useDebounce;
