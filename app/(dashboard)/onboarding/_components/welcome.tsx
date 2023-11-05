"use client";

import { useUser } from "@clerk/nextjs";
import { trpc } from "@/trpc/client";
import { siteConfig } from '@/app/config';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";


export default function Welcome() {
  const router = useRouter()
  const { user, isLoaded } = useUser();

  const [step, setStep] = useState<number>(0);

  const {
    data: onboarding,
    isLoading,
  } = trpc.onboarding.get.byUserId.useQuery();

  const { mutate: updateOnboarding } = trpc.onboarding.post.update.useMutation();

  // @todo: sub-optimal solution, but works for now
  useEffect(() => {
    if (!onboarding) return
    setStep(onboarding.step || 0)
  }, [onboarding]);


  if (!isLoaded) return <div>loading...</div>;
  if (!user) return <div>no user</div>;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const completeOnboarding = async () => {
    updateOnboarding({ completed: true })
    await user.update({
      unsafeMetadata: {
        [siteConfig.onboardingCompletedKey]: true,
      }
    });
    router.push('/app')
  }

  const nextStep = () => {
    setStep((prev) => {
      const newStep = prev + 1
      updateOnboarding({ step: newStep })
      return newStep
    })
  }

  return (
    <div>
      <h2>Welcome {user.fullName}!</h2>
      <p>Lets start with a simple onbarding:</p>
      {step === 0 && (
        <>
          <p>First step</p>
          <button onClick={nextStep}>Next</button>
        </>
      )}
      {step === 1 && (
        <>
          <p>Step1</p>
          <button onClick={nextStep}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <p>Step2</p>
          <button onClick={nextStep}>Next</button>
        </>
      )}
      {step === 3 && (
        <>
          <p>Step3</p>
          <button onClick={completeOnboarding}>Complete onBoarding</button>
        </>
      )}
    </div>
  );
};

