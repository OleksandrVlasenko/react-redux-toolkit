import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

export function DashboardPage() {
  useLogOutRedirect();

  return <div>DashboardPage</div>;
}
