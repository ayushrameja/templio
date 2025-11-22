import { APP_NAME, APP_DESCRIPTION, LAUNCH_DATE } from "@/constants";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.25),transparent_55%)]" />
      <main className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-12 text-center sm:items-stretch">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
            Coming Soon
          </span>
          <span className="text-sm text-zinc-400">
            Alpha launches {LAUNCH_DATE}
          </span>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {APP_NAME} is {APP_DESCRIPTION.toLowerCase()}.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300 sm:text-xl">
            A new way to craft a standout presence online. Effortless
            customization, instant publishing, and beautiful templates tailored
            to your work.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>Building in public with weekly updates</span>
          </div>
        </div>
      </main>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(250,204,21,0.15),transparent_50%)]" />
    </div>
  );
}
