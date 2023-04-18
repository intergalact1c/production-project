import React, { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { className } = props;

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={<Icon SVG={NotificationIcon} isInverted onClick={onOpenDrawer} />}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR} className={cls.trigger}>
                    <Icon SVG={NotificationIcon} isInverted />
                </Button>
                <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
