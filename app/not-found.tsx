import { Navbar } from "@/components/navbar";
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col justify-center gap-3 px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
          😴 <br /> Not Found
        </h1>
        <p className="mx-auto max-w-[45ch] text-sm text-default-500 lg:text-base">
          According to our very accurate records, the page you&apos;re trying to
          access does not exist.
        </p>

        <div className="mx-auto">
          <Link
            href="/"
            className="bg-primary-500 text-gray-12 hover:bg-primary-700 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors lg:w-auto"
          >
            Return Home<ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

