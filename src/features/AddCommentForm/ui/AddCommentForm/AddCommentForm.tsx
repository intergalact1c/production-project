import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/AddCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation('article-details');
        const text = useSelector(getAddCommentFormText);
        const error = useSelector(getAddCommentFormError);
        const dispatch = useAppDispatch();

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChange('');
        }, [onSendComment, onCommentTextChange, text]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div
                    className={classNames(cls.AddCommentForm, {}, [className])}
                    data-testid="AddCommentForm"
                >
                    <Input
                        placeholder={t('Текст комментария')}
                        value={text}
                        onChange={onCommentTextChange}
                        className={cls.input}
                        data-testid="AddCommentForm.Input"
                    />
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSendHandler}
                        data-testid="AddCommentForm.Button"
                    >
                        {t('Отправить')}
                    </Button>
                </div>
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
