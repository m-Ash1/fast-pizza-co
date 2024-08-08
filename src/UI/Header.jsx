import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SeachOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="font-serif flex flex-col items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:flex-row sm:px-6">
      <Link to="/" className="tracking-widest mb-2 sm:mb-0">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
