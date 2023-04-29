"react";

export const Footer = () => {
  return (
    <section className="flex justify-between  px-6 py-6">
      <div className="flex justify-between w-48">
        <div className="text-custom-primary flex flex-col">
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Contact
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Github
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Twitter
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Security
          </span>
        </div>
        <div className="text-custom-primary flex flex-col">
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Support
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Discord
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Terms
          </span>
          <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
            Privacy
          </span>
        </div>
      </div>
      <div className="text-custom-primary flex flex-col relative">
        <span className="flex items-center cursor-pointer hover:text-custom-secondary transition ease-in-out delay-75">
          version
        </span>
      </div>
    </section>
  );
};
