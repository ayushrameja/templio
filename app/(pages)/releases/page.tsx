"use client";

import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui";

interface Release {
  id: number;
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  html_url: string;
}

export default function ReleasesPage() {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/ayushrameja/templio/releases")
      .then((res) => res.json())
      .then((data) => {
        setReleases(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load releases");
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black">
      <Container size="lg" className="relative z-10 py-20 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-display text-4xl text-white sm:text-5xl md:text-6xl">
            Releases
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Track our progress with every release
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-sky-500 border-t-transparent" />
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-6 text-center text-red-400">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-zinc-900/70"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white">
                      {release.name || release.tag_name}
                    </h2>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                      {release.tag_name}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500">
                    Released on{" "}
                    {new Date(release.published_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  View on GitHub
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {release.body && (
                <div className="prose prose-invert max-w-none text-zinc-300 overflow-hidden wrap-break-word">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children }) => (
                        <h2 className="mt-6 mb-3 text-xl font-bold text-white wrap-break-word">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mt-4 mb-2 text-lg font-semibold text-white wrap-break-word">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-3 text-zinc-300 wrap-break-word">
                          {children}
                        </p>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:text-sky-300 underline break-all"
                        >
                          {children}
                        </a>
                      ),
                      ul: ({ children }) => (
                        <ul className="mb-3 list-disc pl-6 space-y-1">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-zinc-300 wrap-break-word">
                          {children}
                        </li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-white wrap-break-word">
                          {children}
                        </strong>
                      ),
                      code: ({ children }) => (
                        <code className="break-all bg-zinc-800 px-1.5 py-0.5 rounded text-sm">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="overflow-x-auto bg-zinc-800 p-4 rounded-lg">
                          {children}
                        </pre>
                      ),
                    }}
                  >
                    {release.body}
                  </ReactMarkdown>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {!loading && releases.length === 0 && (
          <div className="rounded-lg border border-white/10 bg-zinc-900/50 p-12 text-center backdrop-blur-sm">
            <p className="text-zinc-400">No releases yet. Stay tuned!</p>
          </div>
        )}
      </Container>
    </div>
  );
}
