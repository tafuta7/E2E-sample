import { atom } from 'recoil';

export const messagesState = atom<string[]>({
    key: 'messagesState',
    default: [],
});

export const inputValueState = atom<string>({
    key: 'inputValueState',
    default: '',
});
