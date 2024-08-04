import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SeachOrder";
function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Ash</p>
    </header>
  );
}

export default Header;
