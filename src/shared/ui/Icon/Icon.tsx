import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, SVG }: IconProps) => (
    <SVG className={classNames(cls.Icon, {}, [className])} />
));
