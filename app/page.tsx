import * as React from 'react';
import Hero from '@/components/Hero';
import type { Profile, Service } from '@/types';

async function fetchProfiles(): Promise<Profile[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profiles`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch profiles');
  return response.json();
}

async function fetchServices(): Promise<Service[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Failed to fetch profiles');
  return response.json();
}

async function fetchPageData(): Promise<{ profiles: Profile[]; services: Service[] }> {
  const [profiles, services] = await Promise.all([fetchProfiles(), fetchServices()]);
  return { profiles, services };
}

const HomePage: React.FC = () => {
  const { profiles, services } = React.use(fetchPageData());

  return (
    <main>
      <Hero profiles={profiles} services={services} />
    </main>
  );
};

export default HomePage;
export const dynamic = 'force-dynamic';
export const revalidate = 10;
