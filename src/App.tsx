import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import AppLayout from 'components/AppLayout';
import NewsletterEditorPage from 'pages/NewsletterEditorPage';
const PDFReaderPage = React.lazy(() => import('pages/PDFReader/PDFReaderPage'));

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: 'pdf-reader',
          element: <PDFReaderPage />
        },
        {
          path: 'newsletter-editor',
          element: <NewsletterEditorPage />
        }
      ]
    }
  ]);

  return <Suspense fallback={null}>{routes}</Suspense>;
};

export default App;
