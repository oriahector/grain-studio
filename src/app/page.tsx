import { Header } from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container-page min-h-[200vh]">
        <h1 className="text-5xl font-medium md:text-9xl">Grain Studio</h1>
      </main>
    </>
  );
}
