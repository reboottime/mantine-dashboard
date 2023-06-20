/* eslint-disable import/order */
import React, { useState } from 'react';
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Editable, Slate, withReact } from 'slate-react';

export default function EditorPage () {
  const [editor] = useState(() => withReact(createEditor()));

  // Render the Slate context.
  return (
    <Slate editor={editor}
      initialValue={initialValue}>
      <Editable />
    </Slate>
  );
};

const initialValue: any = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }]
  }
];
