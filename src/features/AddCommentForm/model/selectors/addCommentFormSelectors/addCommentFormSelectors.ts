import { StateSchema } from '@/app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) =>
    state?.addCommentForm?.text ?? '';
// .text || '' - отработает некорректно, если в инпут введем 0.
// Используем nullish operator (??). В таком случае стейт проинициализируется пустой строкой только тогда, когда левый операнд null или undefined
// На 0 и другие falsy значения он реагировать не будет
export const getAddCommentFormError = (state: StateSchema) =>
    state?.addCommentForm?.error;
