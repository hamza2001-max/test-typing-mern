import { useMutation } from "react-query";
import { useState } from "react";
import { queryClient } from "..";
import { useRedux } from "./useRedux";
import { authSlice } from "../redux/authSlice";
import { IUseAuth } from "../types";
import axios from "axios";

export const useAuth = (access: "signup" | "login" | "googleLogin") => {
    const { authDispatch } = useRedux();
    const [error, setError] = useState<string[]>([]);
    const { signup, login } = authSlice.actions;

    const handleErrors = (newErr: string, shouldAdd: boolean) => {
        if (shouldAdd) {
            setError(err => [...err, newErr]);
        } else {
            setError(prevErrors => prevErrors.filter(olderr => olderr !== newErr));
        }
    };

    const mutationFunction = async (account: IUseAuth) => {
        const user = await axios.post(`https://testTyping.vercel.app/api/user/${access}`, account, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            access === "signup" && authDispatch(signup(response.data));
            (access === "login" || access === "googleLogin") && authDispatch(login(response.data));
        }).catch(error => {
            handleErrors(error?.response.data.error, true);
        });
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

    return { mutate, setError, error, handleErrors };
}
