import { useMutation } from "react-query";
import { queryClient } from "..";
import axios from "axios";

interface IUseAuth {
    username?: string;
    email: string;
    password: string;
}

export const useAuth = (account: IUseAuth) => {
    const mutationFunction = async () => {
        const postRecord = await axios.post("http://localhost:7000/api/use/signup", account, {
            headers: {
                "Content-Type": "application/json",
            }
        }).catch((err) => {
            console.log(err);
        })
        return postRecord;
    }

    const { mutate } = useMutation({
        mutationFn: mutationFunction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: () => {
            console.error("error received from useMutation");
        }
    });

    return {mutate};
}
