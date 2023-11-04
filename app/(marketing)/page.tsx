'use client'

import { Balancer } from 'react-wrap-balancer';
import type { MouseEventHandler } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import { FaqAccordion } from './_components/faq';
import { FeatureCard } from './_components/feature-card';
import { Preview } from './_components/preview';
import { features, siteConfig } from "../config";

import { ArrowDownIcon, ArrowRightIcon, StarIcon } from '@radix-ui/react-icons';

const smoothScrollToId =
  (id: string): MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
          top: (document.getElementById(id)?.offsetTop ?? 0) - 150,
          behavior: 'smooth',
        });
      }
    };

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <main>
      <section id="hero">
        <header className="container mx-auto flex flex-col items-center justify-center gap-6 pt-36 text-center lg:pt-48">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-4 border-gray-8 dark:bg-graydark-4 dark:border-graydark-8 dark:hover:bg-graydark-5 hover:bg-gray-5 flex items-center gap-4 rounded-full border px-3 py-2 text-sm transition-colors"
          >
            Star us on Github{' '}
            <StarIcon
              className="fill-primary-500 stroke-primary-500"
            />
          </a>
          <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">
            <Balancer>{siteConfig.tagline}</Balancer>
          </h1>
          <p className="text-gray-11 dark:text-graydark-11 leading-normal tracking-tight md:text-base md:leading-7">
            <Balancer>
              {isMobile ? siteConfig.shortDescription : siteConfig.description}
            </Balancer>
          </p>
          <div className="flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row lg:gap-6">
            <Link
              href="/#features"
              onClick={smoothScrollToId('features')}
              className="bg-gray-4 border-gray-6 dark:bg-graydark-4 dark:border-graydark-6 dark:hover:bg-graydark-5 hover:bg-gray-5 flex w-full items-center justify-center gap-4 rounded-md border px-6 py-3 font-semibold transition-colors lg:w-auto"
            >
              Features <ArrowDownIcon />
            </Link>
            <Link
              href="/waitlist"
              className="bg-primary-500 text-gray-12 hover:bg-primary-700 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors lg:w-auto"
            >
              Join Waitlist <ArrowRightIcon />
            </Link>
          </div>
        </header>
      </section>

      <section id="preview">
        <Preview />
      </section>

      <section
        id="features"
        className="container mx-auto mt-36 flex flex-col gap-6 lg:mt-56"
      >
        <h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>A new era of productive students begins.</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 mx-auto max-w-[70ch] text-center leading-normal tracking-tight md:text-base md:leading-7">
          <Balancer>
            Noodle is designed to keep you on top of your education, with
            powerful insights and automations, you&apos;ll never miss a thing
            again.
          </Balancer>
        </p>
        <div className="lg:grid-areas-featuresWide grid grid-cols-1 gap-8 lg:grid-cols-7 lg:grid-rows-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section
        id="mission"
        className="container mx-auto mt-36 flex flex-col gap-8 lg:mt-56"
      >
        <h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>Discussing the elephant in the blender</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 mx-auto leading-7 lg:max-w-[80ch]">
          <Balancer>
            You know that friend that you talk about the future with? <br />{' '}
            <br /> Well we&apos;re two friends, Ahmed and Sinclair that talk
            about the future. We came up with Noodle while talking about how
            great it would be to have a single platform that could make studies
            easier through cross compatibility. <br /> <br />
            You see we&apos;re not lazy, we just love when things work together
            properly. Noodle as you see it is the result of hours of
            discussions, hours of running ideas, talking with many fellow
            students. <br /> <br /> We wanted a platform that could manage your
            notes in an easy to use way, give us information about where we are
            so we know where to go. Flash cards integrated with to do&apos;s,
            with calendars and so much more. What you see as Noodle is
            only&apos;the&apos;beginning. <br /> <br /> We say blender as that
            we see Noodle becoming a blend of everything that we needed while
            pursuing our degrees to keep on top of everything.
          </Balancer>
        </p>
      </section>

      <section
        id="faq"
        className="container mx-auto mt-36 flex flex-col gap-6 lg:mt-56"
      >
        <h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>You probably got many questions for us...</Balancer>
        </h1>
        <p className="text-gray-11 dark:text-graydark-11 mx-auto max-w-[80ch] text-center leading-7">
          <Balancer>
            So here&apos;s a list of things we think you might be wondering
            about when it comes to Noodle. If there are any more I guess too
            bad.
          </Balancer>
        </p>
        <div className="mx-auto w-full pt-6 lg:w-1/2">
          <FaqAccordion />
        </div>
      </section>

      <section id="misc">
        <div className="bg-primary-500 text-gray-12 mt-36 py-14 lg:mt-56">
          <div className="container mx-auto flex flex-col items-start gap-6">
            <h1 className="max-w-[20ch] text-5xl font-extrabold tracking-tighter md:text-6xl">
              <Balancer>How about we take a minute of your time?</Balancer>
            </h1>
            <p className="font-semibold tracking-tight lg:max-w-[80ch]">
              <Balancer>
                It would mean the world to us if you think Noodle will impact your
                productivity for the better and would sign up to our waiting list.
                We are working hard to deliver Noodle as soon as possible so that
                we can improve student productivity as soon as possible.
              </Balancer>
            </p>
            <Link
              href="/waitlist"
              className="bg-gray-1 text-primary-500 dark:bg-graydark-1 dark:hover:bg-graydark-2 hover:bg-gray-2 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors md:w-auto"
            >
              Join Waitlist <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section id="bye">
        <h1 className="mt-36 text-center text-4xl font-extrabold tracking-tighter md:text-6xl">
          <Balancer>
            Thanks k byeee{' '}
            <span role="img" aria-label="face blowing a kiss">
              😘
            </span>
          </Balancer>
        </h1>
      </section>

    </main>
  );
};

