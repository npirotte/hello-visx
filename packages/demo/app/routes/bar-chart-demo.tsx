import type { LoaderFunction, MetaFunction } from 'remix';
import { useActionData, useLoaderData, redirect } from 'remix';

import { BarChart } from '@hello-visx/bar-chart';

// Provide meta tags for this page.
// - https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return { title: 'BarChart' };
};

// Use this function to provide data for the route.
// - https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  return {
    message: 'Hello, world!',
  };
};

export default function BarChartDemo() {
  const data = useLoaderData();

  return <BarChart />;
}
