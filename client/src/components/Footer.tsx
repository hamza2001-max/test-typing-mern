"react";

export const Footer = () => {
  return (
    <section className="flex justify-between">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Contact</span>
          <span>Github</span>
          <span>Twitter</span>
          <span>Security</span>
        </div>
        <div className="flex flex-col">
          <span>Support</span>
          <span>Discord</span>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
      <div className="flex flex-col relative">

        <span>version</span>
      </div>

    </section>
  );
};
