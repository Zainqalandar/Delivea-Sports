import menuItems from '@/config/menuItems';
import React from 'react';


const ListItemsSm = () => {
  return (
    <ul className="text-gray-900 dark:text-white text-sm font-medium space-y-3">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="hover:text-primary-700 dark:hover:text-primary-500"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItemsSm;