import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardHeader.module.scss';

interface ProfilePageHeaderProps {
    classname?: string;
}

export const EditableProfileCardHeader = ({
    classname,
}: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const isEditable = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={classNames(cls.ProfilePageHeader, {}, [classname])}>
            <Text title={t('Профиль пользователя')} className={cls.text} />
            {isEditable && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.BACKGROUND_INVERTED}
                            className={cls.editBtn}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.btn}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.btn}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </HStack>
    );
};
