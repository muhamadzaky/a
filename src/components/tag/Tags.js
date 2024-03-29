const Tags = ({ item, shadow }) => {
  const hasShadow = shadow ? ' shadow' : '';

  return (
    <div key={item} className={`tags${hasShadow}`}>
      {item}
    </div>
  );
};

export default Tags;
