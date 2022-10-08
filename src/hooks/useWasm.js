import * as AsBind from 'as-bind';
import { useEffect, useState } from 'react';

export default function useWasm(filename, imports) {
  const abortController = new AbortController();

  const [state, setState] = useState({
    instance: null,
    loaded: false,
    error: null,
  });

  useEffect(() => {
    const fetchWasm = async () => {
      try {
        const wasm = await fetch(filename, { signal: abortController.signal });
        if (!wasm.ok) {
          throw new Error(`Failed to fetch resource ${filename}.`);
        }
        const instance = await AsBind.instantiate(wasm, imports);
        if (!abortController.signal.aborted) {
          setState({ instance, loaded: true, error: null });
        }
      } catch (e) {
        if (!abortController.signal.aborted) {
          setState({ ...state, error: e });
        }
      }
    };

    fetchWasm();

    return function cleanup() {
      abortController.abort();
    };
  }, [filename, imports]);

  return state;
}
