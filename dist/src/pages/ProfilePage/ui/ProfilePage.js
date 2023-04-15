var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
function ProfilePage(_a) {
    var classname = _a.classname;
    var id = useParams().id;
    var t = useTranslation('profile').t;
    var profileId = __PROJECT__ !== 'storybook' ? id : '1';
    if (!profileId) {
        return _jsx(Text, { text: t('Профиль не найден') }, void 0);
    }
    return (_jsx(PageWrapper, __assign({ className: classNames('', {}, [classname]) }, { children: _jsx(EditableProfileCard, { id: profileId }, void 0) }), void 0));
}
export default memo(ProfilePage);
