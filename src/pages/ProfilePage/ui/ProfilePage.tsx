import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Text } from '@/shared/ui/Text';

interface ProfilePageProps {
    classname?: string;
}

const ProfilePage = ({ classname }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    const profileId = __PROJECT__ !== 'storybook' ? id : '1';

    return (
        <PageWrapper data-testid="ProfilePage" className={classNames('', {}, [classname])}>
            {!profileId ? <Text text={t('Профиль не найден')} /> : <EditableProfileCard id={profileId} />}
        </PageWrapper>
    );
};

export default memo(ProfilePage);
