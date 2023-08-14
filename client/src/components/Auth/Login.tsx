import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { GoogleAuth } from "./GoogleAuth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { mutate, error, setError } = useAuth("login");
  const navigate = useNavigate();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError([]);
    mutate({ email, password: pwd });
    if (!error) {
      navigate('/Account');
    }
  }

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
        <GoogleAuth />
        {error.length > 0 && <span className="text-xs text-custom-secondary">*{error.join(', ')}*</span>}
      </div>
    </form>
  );
};
