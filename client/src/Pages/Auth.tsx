import { Login } from "../components/auth/Login";
import { Signup } from "../components/auth/Signup";
import { Footer } from "../components/include/Footer";
import { Navigation } from "../components/include/Navigation";

export const Auth = () => {
  return (
    <div className="h-full sm:h-screen flex flex-col justify-between">
      <Navigation />
      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-16 sm:space-y-0 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
          <Signup />
          <Login />
        </div>
      </div>
      <Footer />
    </div>
  );
};
