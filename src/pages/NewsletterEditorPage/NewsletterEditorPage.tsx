import { Button } from '@mantine/core';
import { useRef } from 'react';
import EmailEditor from 'react-email-editor';

import templateJson from './design.json';

const NewsletterEditorPage = () => {
  const emailEditorRef = useRef<any>(null);

  const exportHtml = () => {
    emailEditorRef.current?.editor.exportHtml((data: any) => {
      // eslint-disable-next-line no-console
      window.alert(data.html);
    });
    // eslint-disable-next-line no-console
    console.info(emailEditorRef.current?.editor);
  };

  const onReady = () => {
    // editor is ready
    // you can load your template here;
    // const templateJson = {};
    emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <Button color="teal"
          onClick={exportHtml}
          variant="outline">
          Export HTML
        </Button>
      </div>
      <EmailEditor
        onReady={onReady}
        options={{
          customJS: [
            window.location.protocol +
              '//' +
              window.location.host +
              '/custom.js'
          ]
        }}
        projectId={1071}
        ref={emailEditorRef}
      />
    </div>
  );
};

export default NewsletterEditorPage;
