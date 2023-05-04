import { useRoutes } from 'react-router-dom';

import AppLayout from 'components/AppLayout';
import NewsletterEditorPage from 'pages/NewsletterEditorPage';

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: 'newsletter-editor',
          element: <NewsletterEditorPage />
        }
      ]
    }
  ]);

  return element;
};

export default AppRoutes;
