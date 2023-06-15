// TypeScript users only add this code
// eslint-disable-next-line import/named
import { type BaseEditor } from 'slate';
import { type ReactEditor } from 'slate-react';

interface CustomElement { children: CustomText[], type: 'paragraph'; };
interface CustomText { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
