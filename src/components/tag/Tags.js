const Tags = ({ item }) => {
  return (
    <div key={item} className="rounded-pill shadow tags">
      {item}
    </div>
  );
};

export default Tags;
