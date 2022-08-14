import React from 'react';

const Skeleton = (props) => {
  const { width, height, className } = props;

  const skeletonHeight = height || '200px';
  const skeletonWidth = width || '100%';

  return (
    <React.Fragment>
      <div
        className={`skeleton-placeholder${className ? ` ${className}` : ''}`}
        style={{
          width: skeletonWidth,
          height: skeletonHeight
        }}
      />
    </React.Fragment>
  );
};

export default Skeleton;
