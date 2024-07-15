import Head from 'next/head';
import { CompanyDetails } from '@/components/CompanyDetails';
import { MembershipDetails } from '@/components/MembershipDetails';
export default function Home() {
  return (
    <div className='bg-[#F0F0F0]'>
      <main className="flex justify-center items-center min-h-screen gap-4">
        <CompanyDetails />
        <MembershipDetails/>
      </main>
    </div>
  );
}
