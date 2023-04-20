import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/Page';
// import { BugButton } from 'app/providers/ErrorBoundary';
// import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <PageWrapper>
            {t('Главная')}
            {/* <BugButton/> */}
            {/* <Counter /> */}
        </PageWrapper>
    );
};

export default memo(MainPage);
