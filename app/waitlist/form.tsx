'use client'
import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { Balancer } from 'react-wrap-balancer';
import { z } from 'zod';

import { cn } from '@/lib/utils/cn';
import { ArrowRightIcon, AvatarIcon, CheckIcon, EnvelopeClosedIcon, LoopIcon } from '@radix-ui/react-icons';

import { Input } from '@/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { trpc } from '@/trpc/client';

const formInputValidator = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  reason: z.enum(['student', 'project', 'both']),
});

export default function WaitList() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState<
    'student' | 'project' | 'both' | undefined
  >(undefined);
  const [formDisabled, setFormDisabled] = useState(true);
  const { mutate, error, isSuccess } =
    trpc.waitlist.addToWaitlist.useMutation();
  const isLoading = false

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formDisabled) return;

    if (reason) {
      mutate({ email, name, reason });
    }

    setEmail('');
    setName('');
    setReason(undefined);
  };

  useEffect(() => {
    const data = formInputValidator.safeParse({ email, name, reason });
    console.log('data', data, email, name, reason);
    if (data.success) {
      setFormDisabled(false);
    } else {
      setFormDisabled(true);
    }
  }, [email, name, reason]);

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-6 flex w-full max-w-lg flex-col items-center gap-4"
      >
        <Input
          type="text"
          placeholder="Your name..."
          icon={<AvatarIcon />}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="email"
          placeholder="Email address..."
          icon={<EnvelopeClosedIcon />}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Select
          onValueChange={(e: 'student' | 'project' | 'both') => {
            setReason(e);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Why are you interested in Noodle?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">I&apos;m a student</SelectItem>
            <SelectItem value="project">
              I&apos;m interested in the project
            </SelectItem>
            <SelectItem value="both">Both</SelectItem>
          </SelectContent>
        </Select>
        <button
          type="submit"
          disabled={formDisabled}
          className={cn("bg-primary-500 text-gray-12 dark:disabled:bg-graydark-4 dark:disabled:text-graydark-8 dark:disabled:border-graydark-6 hover:bg-primary-700 disabled:bg-gray-4 disabled:text-gray-8 disabled:border-gray-6 flex w-full items-center justify-center gap-4 rounded-md px-6 py-3 font-semibold transition-colors disabled:border",
            formDisabled && "!cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <LoopIcon />
          ) : (
            <span className="flex items-center gap-4">
              Secure your spot <ArrowRightIcon />
            </span>
          )}
        </button>
      </form>
      <div className="mx-auto flex w-full max-w-lg justify-center">
        <AnimateHeight
          height={isSuccess ? 'auto' : 0}
          className={cn(isSuccess && 'w-full')}
        >
          <div className="bg-teal-2 border-teal-2 dark:bg-tealdark-2/50 dark:border-tealdark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
            <div className="flex h-full items-start">
              <div className="bg-teal-1 border-teal-11 dark:bg-tealdark-1 dark:border-tealdark-11 rounded-full border p-[4px]">
                <CheckIcon className="text-teal-10 h-4 w-4" />
              </div>
            </div>
            <div>
              <p className="text-gray-11 dark:text-graydark-11">
                <Balancer>
                  Thanks for signing up to our waitlist, we will be in touch
                  shortly when Noodle becomes available. Until then, you can{' '}
                  <a
                    href="https://twitter.com/noodle_run"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-12 dark:text-graydark-12 underline underline-offset-2"
                  >
                    follow us on twitter
                  </a>{' '}
                  for all updates.
                </Balancer>
              </p>
            </div>
          </div>
        </AnimateHeight>
        <AnimateHeight
          height={error ? 'auto' : 0}
          className={cn(error && 'w-full')}
        >
          <div className="bg-red-1 border-red-2 dark:bg-reddark-2/50 dark:border-reddark-2 flex w-full items-center gap-6 rounded-lg border px-4 py-4">
            <div className="flex h-full items-start">
              <div className="bg-red-1 border-red-11 dark:bg-reddark-1 dark:border-reddark-11 rounded-full border p-[4px]">
                <CheckIcon className="text-red-10 h-4 w-4" />
              </div>
            </div>
            <div>
              <p className="text-red-11 dark:text-reddark-11">
                <Balancer>{error?.message}</Balancer>
              </p>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </>
  );
};
