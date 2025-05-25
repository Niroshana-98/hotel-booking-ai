import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Head>
        <title>Hotel Booking</title>
        <meta name="description" content="AI-powered hotel booking website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  );
}