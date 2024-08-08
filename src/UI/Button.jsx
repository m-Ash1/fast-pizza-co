import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    secondary:
      "rounded-full text-sm-full px-4 py-2.5 md:px-6 md:py-3.5 text-stone-400 text-sm  border-2 border-stone-300 font-semibold uppercase tracking-wide  transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2 ",

    small: base + " px-4 py-2  md:py-2.5 md:px-5 text-xs",
    circle: base + " w-9 h-9 flex items-center justify-center",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
