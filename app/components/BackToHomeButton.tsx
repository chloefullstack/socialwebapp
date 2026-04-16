import Link from 'next/link';

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
    >
      Back to Home
    </Link>
  );
}