import { Button } from '@mantine/core';
import { useRef } from 'react';
import EmailEditor from 'react-email-editor';

import useLoadScript from './useLoadScript';

const NewsletterEditorPage = () => {
  const emailEditorRef = useRef<any>(null);

  const exportHtml = () => {
    emailEditorRef.current?.editor.exportHtml((data: any) => {
      // eslint-disable-next-line no-console
      console.info(data);
    });
    // eslint-disable-next-line no-console
    console.info(emailEditorRef.current?.editor);
  };

  const onReady = () => {
    // editor is ready
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  // eslint-disable-next-line no-console
  useLoadScript('//editor.unlayer.com/embed.js');

  return (
    <div>
      <div>
        <Button color="teal"
          onClick={exportHtml}
          variant="outline">
          Export HTML
        </Button>
      </div>
      <EmailEditor onReady={onReady}
        projectId={157670}
        ref={emailEditorRef}
      />
    </div>
  );
};

export default NewsletterEditorPage;
