import { Outlet, createRootRoute } from '@tanstack/react-router';

import { getShortCommitHash } from '@/utils/getShortCommitHash';

import { calculateChecksum } from '@/utils/checksum';


export const Route = createRootRoute({
  component: App,
});

function App() {
  const checksum = calculateChecksum(getShortCommitHash(import.meta.env.VITE_COMMIT_HASH));
  console.log(checksum);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div>Hello World</div>

    <Outlet />
    </div>
  );
}
