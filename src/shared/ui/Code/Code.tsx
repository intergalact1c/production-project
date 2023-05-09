import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import CopyIcon from '../../assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const { t } = useTranslation('article-details');

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <div className={classNames(cls.Code, {}, [className])}>
            <Button type="button" theme={ButtonTheme.CLEAR} className={cls.btn} title={t('Копировать')} onClick={onCopy}>
                <CopyIcon />
            </Button>
            <pre>
                <code>{text}</code>
            </pre>
        </div>
    );
});
