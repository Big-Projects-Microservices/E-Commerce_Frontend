import { Link } from "react-router-dom";
import Profile from "../atoms/Profile";
import Searcher from "../atoms/Searcher";
import ShoppingCart from "../atoms/ShoppingCart";

export default function LeftSideHeader() {
  const menuList = [
    { id: 1, name: "Home" },
    { id: 2, name: "Bags" },
    { id: 3, name: "Sneakers" },
    { id: 4, name: "Belt" },
    { id: 5, name: "Contact" },
  ];
  const navList = [
    { id: 1, name: <Profile /> },
    {
      id: 2,
      name: (
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      ),
    },
    { id: 3, name: "Items" },
    { id: 4, name: "$0.00" },
    { id: 5, name: <Searcher /> },
  ];

  return (
    <div className="flex-none">
      <ul className="flex space-x-4 gap-1 justify-end">
        {navList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul className="flex space-x-4 gap-10 mt-4">
        {menuList.map((item) => (
          <li className="font-custom uppercase" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
