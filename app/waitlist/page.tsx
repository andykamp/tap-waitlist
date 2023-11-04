'use client'
import { Balancer } from 'react-wrap-balancer';
import WaitlistForm from './form';

export default function WaitList() {
  return (
    <main>
      <header className="container mx-auto mt-32 flex justify-center md:mt-48 xl:mt-56">
        <div className="flex flex-col gap-6">
          <h1 className="mx-auto max-w-[20ch] text-center text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl">
            <Balancer>
              Join the waitlist and transform your educational productivity.
            </Balancer>
          </h1>
          <p className="text-gray-11 dark:text-graydark-11 mx-auto text-center">
            <Balancer>
              By signing up to our waitlist, you will be first in line to know
              when we launch and getting early access.
            </Balancer>
          </p>
          <WaitlistForm/>
        </div>
      </header>
    </main>
  );
};
