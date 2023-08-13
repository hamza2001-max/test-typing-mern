import { useQuery } from 'react-query';
import axios from "axios";
import { useRedux } from './useRedux';

export const useGetData = () => {
    const {authSelector} = useRedux();
    const { data, isLoading, error } = useQuery('wpmRecord', async () => {
        try {
            const response = await axios.get('http://localhost:7000/api/wpm/', {
                headers: {
                    Authorization: `Bearer ${authSelector?.token}`
                }
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    });
    return { data, isLoading, error };
}
