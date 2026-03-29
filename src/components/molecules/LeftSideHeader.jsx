import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Icon } from "@atoms";
import iconUser from "../../assets/header/my-profile.svg";
import searcher from "../../assets/header/search-icon.svg";
import { useTranslation } from "react-i18next";

export default function LeftSideHeader() {
  const location = useLocation();
  const lang = useLocation().pathname.split('/')[1] || 'en';
  const { t } = useTranslation();

  if (location.pathname === "/500") {
    return null;
  }

  const menuList = [
    { id: 1, name: t('nav.home'), path: `/${lang}` },
    { id: 2, name: t('nav.bags'), path: `/${lang}/bags` },
    { id: 3, name: t('nav.sneakers'), path: `/${lang}/sneakers` },
    { id: 4, name: t('nav.belt'), path: `/${lang}/belt` },
    { id: 5, name: t('nav.contact'), path: `/${lang}/contact` },
  ];

  const navList = [
    {
      id: 1,
      name: (
        <Icon text={t('nav.profile')} src={iconUser} />
      ),
    },
    {
      id: 2,
      name: (
        <Link to={`/cart`}>
          <ShoppingCart />
        </Link>
      ),
    },
    { id: 3, name: t('common.itemsCount') },
    { id: 4, name: "$0.00" },
    { id: 5, name: <Icon src={searcher} alt={t('titles.search')} /> },
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
            <Link
              to={item.path}
              className="hover:text-gray-500 transition duration-150"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
