import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
// import { CustomersTableSkeleton } from '@/app/ui/skeletons'; // Changed this line

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const customers = await fetchFilteredCustomers(query);

  return (
    <Suspense>
      <CustomersTable customers={customers} />
    </Suspense>
  );
}
