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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/AddCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText, } from '../../model/selectors/addCommentFormSelectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
var reducers = {
    addCommentForm: addCommentFormReducer,
};
var AddCommentForm = memo(function (_a) {
    var className = _a.className, onSendComment = _a.onSendComment;
    var t = useTranslation('article-details').t;
    var text = useSelector(getAddCommentFormText);
    var error = useSelector(getAddCommentFormError);
    var dispatch = useAppDispatch();
    var onCommentTextChange = useCallback(function (value) {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    var onSendHandler = useCallback(function () {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsxs("div", __assign({ className: classNames(cls.AddCommentForm, {}, [className]) }, { children: [_jsx(Input, { placeholder: t('Текст комментария'), value: text, onChange: onCommentTextChange, className: cls.input }, void 0), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onSendHandler }, { children: t('Отправить') }), void 0)] }), void 0) }), void 0));
});
export default AddCommentForm;
