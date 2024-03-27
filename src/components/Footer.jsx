const Footer = () => {
  return (
    <footer className="select-none text-sm text-center max-sm:text-[0.65rem] text-slate-950 transition-all absolute bottom-0 left-1/2 -translate-x-1/2 z-1">
      <p className="drop-shadow-[0_0_4px_rgba(0,0,0,1)]">
        Desenvolvido com ☕️ por{" "}
        <a
          className="no-underline transition-all duration-[0.5s] hover:drop-shadow-[0_0_8px_rgba(0,0,0,1)] hover:text-slate-300 font-bold"
          href="https://www.linkedin.com/in/eltonjcs"
          target="_blank"
        >
          EltonJCS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
