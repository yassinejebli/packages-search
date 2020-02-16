import React from 'react';

//https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value]
    );
    return debouncedValue;
};

export default useDebounce;
