"use client";

import { useMemo, useState } from "react";

const compliments = [
  "You bring great energy to every conversation.",
  "Your curiosity makes everyday questions feel exciting.",
  "You have a talent for making complex ideas easy to follow.",
  "Your presence makes even quick chats feel meaningful.",
  "You have a knack for spotting the bright side of things.",
  "You inspire people around you to keep learning.",
];

const icebreakers = [
  "What's something that made you smile today?",
  "What topic could you talk about for hours without getting bored?",
  "If we teamed up on a project, what would you want to build first?",
  "What is one small win you'd like to celebrate right now?",
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 5) return "It's a calm night";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

export default function Home() {
  const [name, setName] = useState("");
  const [complimentIndex, setComplimentIndex] = useState(0);

  const greeting = useMemo(() => getGreeting(), []);
  const compliment = compliments[complimentIndex];
  const displayName = name.trim() || "friend";

  const cycleCompliment = () => {
    setComplimentIndex((index) => {
      const nextIndex = Math.floor(Math.random() * compliments.length);
      return nextIndex === index
        ? (nextIndex + 1) % compliments.length
        : nextIndex;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35rem] text-slate-400">
            Agentic Hello
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hi there — let&apos;s make this chat feel a little more personal.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            A lightweight greeting canvas built with Next.js. Share your name,
            tap the button, and enjoy a friendly boost paired with an icebreaker
            to keep the conversation rolling.
          </p>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl backdrop-blur">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium uppercase tracking-widest text-slate-400"
            >
              How should we greet you?
            </label>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Type your name or nickname"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-base text-slate-100 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-sky-400"
              />
              <button
                type="button"
                onClick={cycleCompliment}
                className="rounded-2xl bg-sky-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Surprise me
              </button>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/5 bg-slate-950/50 p-6">
            <p className="text-sm uppercase tracking-widest text-sky-300">
              Personalized Greeting
            </p>
            <p className="text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">
              {greeting}, {displayName}! {compliment}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-slate-400">
              Conversation Starters
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {icebreakers.map((prompt) => (
                <li
                  key={prompt}
                  className="rounded-2xl border border-transparent bg-slate-950/40 px-5 py-4 text-sm text-slate-300 transition hover:border-sky-500/40 hover:bg-slate-900/70"
                >
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Crafted with Next.js, React, and a dash of Tailwind.</span>
          <span className="text-slate-400">
            Ready for deployment on Vercel · agentic-50fce3e9
          </span>
        </footer>
      </main>
    </div>
  );
}
