import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, { ...options });
                const responseData = await response.json();
                setData(responseData);
                setPending(false);
            } catch (error) {
                setError(error.message);
                setPending(false);
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [url, options]);

    console.log('Data:', data);
    console.log('Error:', error);
    console.log('Pending:', pending);

    return { data, error, pending };
}
