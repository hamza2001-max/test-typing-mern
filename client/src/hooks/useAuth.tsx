import { useMutation } from "react-query";
import { queryClient } from "..";
import { useRedux } from "./useRedux";
import { authSlice } from "../redux/authSlice";
import { IUseAuth } from "../types";
import axios from "axios";

export const useAuth = () => {
    const { authDispatch } = useRedux();
    const { signup } = authSlice.actions;

    const mutationFunction = async (account: IUseAuth) => {
        const user = await axios.post("http://localhost:7000/api/user/signup", account, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            authDispatch(signup(response.data));
        }).catch((err) => {
            console.log(err);
        })
        return user;
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

    return { mutate };
}