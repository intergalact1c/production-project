import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@/widgets/Page';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <PageWrapper data-testid="AboutPage">
            {t('О сайте')}
        </PageWrapper>
    );
}

export default memo(AboutPage);
