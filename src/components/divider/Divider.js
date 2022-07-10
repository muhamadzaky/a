const Divider = ({ className }) => {
  return <hr className={`divider ${className ? ` ${className}` : ''}`} />;
};

export default Divider;
