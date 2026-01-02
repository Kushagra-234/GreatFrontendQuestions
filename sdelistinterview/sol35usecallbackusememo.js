// usecallback and useMemo
// useMemo is used to cache value or memoize value and useCallback is used to cache function

// if react.memo is used for component then useCallback is used for function and useMemo is used for value,also usecallback caches function so if parent re-renders than also child dont re-redners

function useDebouced(value, delay) {
  const [valueDebounced, setValDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValDebounced(value);
    });
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return valueDebounced;
}

// React.memo = “should this component re-render?”
// useMemo = “iss render me calculation dubara karni hai?”

// startTransition lets React deprioritize expensive state updates so urgent interactions remain responsive.
