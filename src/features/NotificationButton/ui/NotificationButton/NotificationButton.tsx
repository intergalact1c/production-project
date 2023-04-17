import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={(<Icon SVG={NotificationIcon} isInverted />)}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
