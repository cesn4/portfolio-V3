import React, { Fragment, FunctionComponent } from 'react';
import { projects } from '~/mocks/projects';

import './ImagePreload.scss';

const ImagePreload: FunctionComponent = () => {
    const className = 'image-preload';
    const renderImages = projects.map((obj) => {
        return <Fragment>
            <img src={obj.image} alt=''></img>
            {obj.imageL && <img src={obj.imageL} alt=''></img>}
            {obj.imageR && <img src={obj.imageR} alt=''></img>}
        </Fragment>
    })
    return (
        <div className={className}>
            {renderImages}
        </div>
    );
};

export default ImagePreload;
