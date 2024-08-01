import PageNotFound from '@/layouts/PageNotFound';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: '404 Not Found',
  description: 'Sorry we can’t find the page you’re looking for',
};
const NotFound = () => {
  return <PageNotFound />;
};

export default NotFound;
