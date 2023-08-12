import { AiOutlineGoogle } from "react-icons/ai";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { mutate, error, setError } = useAuth("login");
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError([]);
    mutate({ email, password: pwd });
    navigate('/Account');
  }

  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log("an error has occured ");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="flex flex-col space-y-2 w-60">
        <span className="text-custom-tertiary">login</span>
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <button className="text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <FiLogIn className="mr-2" />Login
        </button>
        <span className="text-custom-tertiary flex justify-center">or</span>
        <button className="relative text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <AiOutlineGoogle className="mr-2" /> Google Login
          <div className="absolute w-full opacity-0">
            <GoogleOAuthProvider clientId="19915083809-jnviefjfere0tiqaim77gargq2m50lf2.apps.googleusercontent.com">
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </GoogleOAuthProvider>
          </div>
        </button>
        {error.length > 0 && <span className="text-xs text-custom-secondary">*{error.join(', ')}*</span>}
      </div>
    </form>
  );
};
