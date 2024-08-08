import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  // b retrieve el data mn el loader
  const menu = useLoaderData();
  return (
    <>
      <ul className="px-2 divide-y-2">
        {menu.map((pizza) => {
          return <MenuItem key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </>
  );
}
// function b fetch feha el API bta3 el menu
export async function loader() {
  return await getMenu();
}

export default Menu;
