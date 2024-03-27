import {useState, useEffect} from 'react';

export const useCustomHook = () => {
    const [state, setState] = useState(0);
    
    useEffect(() => {
        console.log('useCustomHook');
    }, []);
    
    return {state, setState};
}