import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [verEmail, setVerEmail] = useState("");
  const [verPwd, setVerPwd] = useState("");
  const { mutate, error, setError, handleErrors } = useAuth("signup");
  const navigate = useNavigate();
  const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?\":{}|<>]).{8,150}$/;

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError([]);
    if (email !== verEmail || pwd !== verPwd || (username.length > 35 ||
      username.length < 3 || !pwdRegex.test(pwd))) {
      if (
        email !== verEmail
      ) {
        handleErrors("Email and the verifying email do not match", true);
      } else {
        handleErrors("Email and the verifying email do not match", false);
      }

      if (pwd !== verPwd) {
        handleErrors("Password and the verifying Password do not match", true);
      } else {
        handleErrors("Password and the verifying Password do not match", false);
      }

      if (!pwdRegex.test(pwd)) {
        handleErrors(
          "Password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 150 characters",
          true
        );
      } else {
        handleErrors(
          "Password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 150 characters",
          false
        );
      }

      if (username.length > 35 ||
        username.length < 3) {
        handleErrors("Username length should be between 3 and 35 letters", true);
      } else {
        handleErrors("Username length should be between 3 and 35 letters", false);
      }
    } else {
        mutate({ username, email, password: pwd });
        setError([]);
        navigate('/Account');
    }
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
          required
        />
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="verify email"
          onChange={(e) => setVerEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <input
          type="password"
          className="px-2 text-custom-tertiary placeholder:text-custom-primary h-9 rounded-md bg-custom-fadedFill outline-none"
          placeholder="verify password"
          onChange={(e) => setVerPwd(e.target.value)}
          required
        />
        <button className="text-custom-tertiary h-9 rounded-md flex items-center justify-center bg-custom-fadedFill">
          <FiUserPlus className="mr-2" /> Sign Up
        </button>
        {error.length > 0 && <span className="text-xs text-custom-secondary">*{error.join(', ')}*</span>}
      </div>
    </form>
  );
};
