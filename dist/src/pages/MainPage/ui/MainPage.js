import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/Page';
// import { BugButton } from 'app/providers/ErrorBoundary';
// import { Counter } from 'entities/Counter';
var MainPage = function () {
    var t = useTranslation('main').t;
    return (_jsx(PageWrapper, { children: t('Главная') }, void 0));
};
export default memo(MainPage);
