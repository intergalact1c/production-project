import React, {
    HTMLAttributeAnchorTarget, memo, MutableRefObject, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
    List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { PAGE_ID } from '@/widgets/Page/ui/PageWrapper/PageWrapper';
import { ArticleView } from '../../model/const/consts';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleVirtualizedList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 8 : 4).fill(0).map((item, index) => (
    <ArticleListItemSkeleton
        key={index}
        view={view}
    />
));

export const ArticleVirtualizedList = memo(({
    className, articles, isLoading, view = ArticleView.TILE, target,
}: ArticleListProps) => {
    const { t } = useTranslation('articles');
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const isList = view === ArticleView.LIST;
    const articlesPerRow = isList ? 1 : 4;
    const rowCount = isList ? articles.length : Math.ceil(articles.length / articlesPerRow);

    const rowRender = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * articlesPerRow;
        const toIndex = Math.min(fromIndex + articlesPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    key={articles[i].id}
                    article={articles[i]}
                    view={view}
                    target={target}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={classNames(cls.articlesRow, {}, [])}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return <Text size={TextSize.L} title={t('Статьи не найдены')} />;
    }

    return (
        <div ref={containerRef}>
            {/* @ts-ignore */}
            <WindowScroller
                // scrollElement={containerRef.current}
                scrollElement={document.getElementById(PAGE_ID) as Element}
            >
                {({
                    height,
                    width,
                    registerChild,
                    onChildScroll,
                    isScrolling,
                    scrollTop,
                }) => (
                    <div
                        // @ts-ignore
                        ref={registerChild}
                        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    >
                        {/* @ts-ignore */}
                        <List
                            autoHeight
                            width={width || 1292}
                            height={height || 546} // height={height ?? 546}
                            rowCount={rowCount}
                            rowHeight={isList ? 546 : 450}
                            rowRenderer={rowRender}
                            onScroll={onChildScroll}
                            isScrolling={isScrolling}
                            scrollTop={scrollTop}
                        />
                        {isLoading && getSkeletons(view)}
                    </div>
                )}
            </WindowScroller>
        </div>
    );
});
