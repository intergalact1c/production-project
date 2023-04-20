import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text/Text';

interface ProfilePageProps {
    classname?: string;
}

function ProfilePage({ classname }: ProfilePageProps) {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');

    const profileId = __PROJECT__ !== 'storybook' ? id : '1';

    if (!profileId) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <PageWrapper className={classNames('', {}, [classname])}>
            <EditableProfileCard id={profileId} />
        </PageWrapper>
    );
}

export default memo(ProfilePage);
