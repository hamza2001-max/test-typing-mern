import { useQuery } from 'react-query';
import axios from "axios";

export const useGetData = () => {
    const { data, isLoading, error } = useQuery('wpmRecord', async () => {
        try {
            const response = await axios.get('http://localhost:7000/api/wpm/');
            return response.data;
        } catch (err) {
            throw err;
        }
    });
    
    return { data, isLoading, error };
}
