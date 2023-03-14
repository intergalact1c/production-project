import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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
            <Button
                type="button"
                theme={ButtonTheme.CLEAR}
                className={cls.btn}
                title={t('Копировать')}
                onClick={onCopy}
            >
                <CopyIcon />
            </Button>
            <pre>
                <code>
                    {text}
                </code>
            </pre>
        </div>
    );
});
