import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center p-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Ready to build
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'm ready for your instructions.
          </p>
        </div>
      </main>
    </>
  );
}
