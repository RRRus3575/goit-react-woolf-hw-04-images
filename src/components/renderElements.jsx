const Render = ({ data, click }) => {
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id} onClick={click}>
          <img src={el.webformatURL} srcSet={el.webformatURL} alt={el.tags} />
        </li>
      ))}
    </ul>
  );
};

export default Render;
