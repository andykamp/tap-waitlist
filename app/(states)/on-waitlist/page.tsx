export default function Page() {
  return (
    <main className="-mt-12 flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
        🥰  <br /> You are on the waitinglist
      </h1>
      <p className="max-w-[45ch] text-sm text-default-500 lg:text-base">
        We are working hard to get you access to our services. We will email you a invitation as soon as we are ready.
      </p>
    </main>
  );
}

