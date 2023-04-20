import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    isInverted?: boolean;
    onClick?: () => void;
}

export const Icon = memo(({
    className, SVG, isInverted = false, onClick,
}: IconProps) => (
    <SVG
        className={classNames(isInverted ? cls.inverted : cls.Icon, {}, [className])}
        onClick={onClick}
    />
));
