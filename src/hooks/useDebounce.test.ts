import {act, renderHook} from "@testing-library/react-hooks";
import useDebounce from "./useDebounce";

jest.useFakeTimers();

describe('useDebounce', () => {
    it('should update value when delay is passed',  ()=>{
        const delay = 500;
        const { result, rerender } = renderHook(
            ({ value, delay }) => useDebounce(value, delay),
            { initialProps: { value: '1', delay: delay } }
        );

        expect(result.current).toBe('1');

        rerender({value: '11', delay: delay});
        act( ()=>{
            jest.runTimersToTime(500);
        });

        expect(result.current).toBe('11');
    });
});
