import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PageWrapper } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <PageWrapper className={classNames('', {}, [className])}>
            {isEdit
                ? `Редактирование статьи с id = ${id}`
                : 'Создание новой статьи'}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>
                Обобщающий виджет с набором фичей: создания текстового блока,
                изображения
            </p>
        </PageWrapper>
    );
});

export default ArticleEditPage;
