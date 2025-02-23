const Item = (props) => {
  let { foodItem } = props;
  return (
    <li className="list-group-item kg-item">
      <span className="kg-span">{foodItem}</span>
    </li>
  );
};

export default Item;
