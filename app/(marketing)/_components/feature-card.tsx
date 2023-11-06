import { cn } from "@/lib/utils/cn";
import { type FC, type ReactNode } from "react";

export type FeatureCardProps = {
  emoji: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

export const FeatureCard: FC<FeatureCardProps> = ({
  children,
  emoji,
  title,
  className,
}) => {
  return (
        <div
      className={cn(
        className,
        'from-gray-2 dark:from-graydark-2 via-gray-3 dark:via-graydark-3 to-gray-2 dark:to-graydark-2 border-gray-6 dark:border-graydark-6 rounded-xl border bg-gradient-to-br px-8 py-9',
      )}
    >
      <h2 className="text-3xl font-extrabold">{emoji}</h2>
      <h2 className="py-4 text-2xl font-extrabold">{title}</h2>
      <div className="text-gray-11 dark:text-graydark-11 text-sm leading-6">
        {children}
      </div>
    </div>

    // <div
    //   className={cn(
    //     className,
    //     "rounded-xl border border-zinc-300 bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-100 px-8 py-9 dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900",
    //   )}
    // >
    //   <h2 className="text-3xl font-extrabold">{emoji}</h2>
    //   <h2 className="py-4 text-2xl font-extrabold">{title}</h2>
    //   <div className="text-sm leading-6">{children}</div>
    // </div>
  );
};

