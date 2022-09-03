const Tags = ({ item, shadow }) => {
  const hasShadow = shadow ? ' shadow' : '';

  return (
    <div key={item} className={`rounded-pill tags${hasShadow}`}>
      {item}
    </div>
  );
};

export default Tags;
