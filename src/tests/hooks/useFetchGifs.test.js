import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from "@testing-library/react-hooks"

describe('Pruebas en useFetchGifs.js', () => {

    test('', async() => {
        
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs ('Dota 2'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('', async () => {
        
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs ('Dota 2'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(15);
        expect(loading).toBe(false);
    })
})
