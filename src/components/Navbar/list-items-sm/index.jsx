import React from 'react';

const menuItems = [
  { title: 'Home', href: '#' },
  { title: 'Best Sellers', href: '#' },
  { title: 'Gift Ideas', href: '#' },
  { title: 'Games', href: '#' },
  { title: 'Electronics', href: '#' },
  { title: 'Home & Garden', href: '#' },
];

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