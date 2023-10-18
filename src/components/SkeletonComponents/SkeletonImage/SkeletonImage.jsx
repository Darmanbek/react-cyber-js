import React from 'react';
import { Skeleton } from 'antd';
import "./skeletonImage.scss";

const SkeletonImage = () => {
    const skeletonImage = [];

    for (let i = 0; i < 16; i++) {
        skeletonImage.push(i);
    }

    return (
        <div className="image-skeleton">
            {skeletonImage.map((_, index) => (
                <Skeleton.Image className="image-skeleton__item" key={index}/>
            ))}
        </div>
    );
}

export default SkeletonImage;