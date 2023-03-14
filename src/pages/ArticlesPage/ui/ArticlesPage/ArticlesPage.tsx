import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames('', {}, [className])}>
        ...
    </div>
);

export default memo(ArticlesPage);
