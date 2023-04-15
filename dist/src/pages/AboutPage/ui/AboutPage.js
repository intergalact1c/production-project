import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/Page';
function AboutPage() {
    var t = useTranslation('about').t;
    return (_jsx(PageWrapper, { children: t('О сайте') }, void 0));
}
export default memo(AboutPage);
