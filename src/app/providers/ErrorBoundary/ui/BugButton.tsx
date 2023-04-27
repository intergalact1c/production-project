import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(!error);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button theme={ButtonTheme.OUTLINE} onClick={onThrow}>{t('Выбросить ошибку')}</Button>
    );
};
