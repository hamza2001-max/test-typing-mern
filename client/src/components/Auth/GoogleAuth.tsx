import jwt_decode from "jwt-decode";
import { useAuth } from '../../hooks/useAuth';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export const GoogleAuth = () => {
    const { mutate, handleErrors } = useAuth("googleLogin");
    return (
        <button className="relative text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
            <AiOutlineGoogle className="mr-2" /> Google Login
            <div className="absolute w-full opacity-0">
                <GoogleOAuthProvider clientId="19915083809-jnviefjfere0tiqaim77gargq2m50lf2.apps.googleusercontent.com">
                    <GoogleLogin onSuccess={(credentialRespose) => {
                        if (credentialRespose.credential) {
                            let decoded: { email: string } = jwt_decode(credentialRespose?.credential);
                            mutate({ email: decoded.email });
                        }
                    }} onError={() => {
                        handleErrors("error occured in GoogleLogin", true);
                    }} />
                </GoogleOAuthProvider>
            </div>
        </button>
    )
}
