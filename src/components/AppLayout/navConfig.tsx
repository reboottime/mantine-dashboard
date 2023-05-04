import { IconChartAreaLine, IconForms, IconTable } from '@tabler/icons-react';

export const sidebarMenus: NavLinkProps[] = [
  {
    icon: <IconTable />,
    label: 'Tables',
    path: '/tables',
    subMenus: [
      {
        label: 'Basic',
        path: 'tables/basic'
      }
    ]
  },
  {
    icon: <IconForms />,
    label: 'Forms',
    path: '/forms',
    subMenus: [
      {
        label: 'Basic',
        path: 'forms/basic'
      }
    ]
  },
  {
    icon: <IconForms />,
    label: 'Newsletter Editor',
    path: '/newsletter-editor'
  },
  {
    icon: <IconChartAreaLine />,
    label: 'Visualization',
    path: '/data-visualization',
    subMenus: [
      {
        label: 'Basic',
        path: 'data-visualization/basic'
      }
    ]
  }
];

interface NavLinkProps {
  color?: string;
  icon?: React.ReactNode;
  label: string;
  path: string;
  subMenus?: NavLinkProps[];
}
