import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => (
  <ul className="list-group list-group-flush">
    {items.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
ItemList.propTypes = {
  items: PropTypes.array
}

export default ItemList;
