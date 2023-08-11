import { useState, useEffect } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { useRedux } from "../../hooks/useRedux";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [verEmail, setVerEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [verPwd, setVerPwd] = useState("");
  const { mutate } = useAuth();
  const { authSelector } = useRedux();

  useEffect(() => {
    console.log(authSelector?.username);
    console.log(authSelector?.token);
  }, [authSelector]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ username, email, password: pwd });
  }

  return (
    <form onSubmit={submitForm}>
      <div className="flex flex-col space-y-2 w-60">
        <span className="text-custom-tertiary">register</span>
        <input
          type="text"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="verify email"
          onChange={(e) => setVerEmail(e.target.value)}
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="password"
          onChange={(e) => setPwd(e.target.value)}

        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="verify password"
          onChange={(e) => setVerPwd(e.target.value)}
        />
        <button className="text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <FiUserPlus className="mr-2" /> Sign Up
        </button>
      </div>
    </form>
  );
};
