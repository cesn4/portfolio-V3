import React, { FunctionComponent, ElementType } from 'react';
import classNames from 'classnames';

import './Icon.scss';
import SVGClose from './assets/SVGClose';
import SVGLinkedIn from './assets/SVGLinkedIn';
import SVGFaceBook from './assets/SVGFaceBook';
import SVGGitHub from './assets/SVGGitHub';

const Icon: FunctionComponent<IconProps> = ({
    className,
    color = '#fff',
    size = 16,
    name,
}: IconProps) => {
    const iconProps = { color, size };
    const renderIcon: ElementType = (name: IconType) => {
        switch (name) {
            case 'close':
                return <SVGClose {...iconProps} />;
            case 'linked-in':
                return <SVGLinkedIn {...iconProps} />;
            case 'facebook':
                return <SVGFaceBook {...iconProps} />;
            case 'github':
                return <SVGGitHub {...iconProps} />;
            default:
                return null;
        }
    };
    return (
        <div className={classNames('icon', className)}>{renderIcon(name)}</div>
    );
};

interface IconProps {
    className?: string;
    color?: string;
    size?: number;
    name: IconType;
}

export type IconType = 'close' | 'linked-in' | 'facebook' | 'github';

export default Icon;
