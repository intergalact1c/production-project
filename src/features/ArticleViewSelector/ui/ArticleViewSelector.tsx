import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '../../../shared/assets/icons/list.svg';
import TileIcon from '../../../shared/assets/icons/tile.svg';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation('articles');

    // Ф-я onClick всегда принимает эвент, специфичный для слушателя события onClick
    // Также, нам надо передать в ф-ю новый вид отображения, выбранный пользователем
    // Поэтому, мы делаем ф-ю, которая возвращает ф-ю (такого рода замыкание) принимающую (на верхнем уровне замыкания) newView

    /* const onClickButton = (newView: ArticleView) => {
            return () => {
                onViewClick?.(newView);
            };
        }; */

    const onClickButton = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((type) => (
                <Button
                    key={type.view}
                    theme={ButtonTheme.CLEAR}
                    // onClickButton передаем не как ссылку. Мы вызываем ф-ю onClickButton, а ее вызов вернет нам новую функцию
                    onClick={onClickButton(type.view)}
                    title={type.view === 'list' ? t('Список') : t('Плитка')}
                    className={classNames(cls.btn, { [cls.notSelected]: type.view !== view }, [])}
                >
                    <Icon SVG={type.icon} />
                </Button>
            ))}
        </div>
    );
});
