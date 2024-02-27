import { useState, useEffect } from 'react';
import axios from 'axios';

const useVansData = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/vans');
                setVans(response.data.vans);
            } catch (error) {
                console.error('Error fetching vans:', error);
            }
        };
        fetchData();
    }, []);

    return vans;
};

export default useVansData;