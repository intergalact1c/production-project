import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { Counter } from '@/entities/Counter';
import { PageWrapper } from '@/widgets/Page';
// import { BugButton } from '@/app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <PageWrapper data-testid="MainPage">
            {t('Главная')}
            {/* <BugButton/> */}
            {/* <Counter /> */}
        </PageWrapper>
    );
};

export default memo(MainPage);
