import React, {
    memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { getScrollRecoveryPath } from '../ScrollRecovery/model/selectors/scrollRecovery';
import { scrollRecoveryActions } from '../ScrollRecovery/model/slices/scrollRecoverySlice';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    isTriggerVisible?: boolean;
}

export const PAGE_ID = 'PAGE_ID';

export const PageWrapper = memo(({
    className, children, onScrollEnd, isTriggerVisible = true,
}: PageWrapperProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollRecoveryPath(state, pathname));

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        // console.log('onScroll');
        dispatch(scrollRecoveryActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const mods: Mods = {
        [cls.hide]: !isTriggerVisible,
    };

    return (
        <main
            id={PAGE_ID}
            ref={wrapperRef}
            className={classNames(cls.PageWrapper, {}, [className])}
            onScroll={onScroll}
        >
            <div className={cls.inner}>
                {children}
                {onScrollEnd ? <div className={classNames(cls.trigger, mods, [])} ref={triggerRef} /> : null}
            </div>
        </main>
    );
});
