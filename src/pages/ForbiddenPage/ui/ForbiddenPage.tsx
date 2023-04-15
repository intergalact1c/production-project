import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            {t('Нет доступа к этой странице')}
        </PageWrapper>
    );
};

export default memo(ForbiddenPage);
