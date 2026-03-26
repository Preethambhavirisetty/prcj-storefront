import { useQuery } from '@tanstack/react-query';
import { getPage } from '../api/content.js';
import { DividerCenter } from '../components/ui/Divider.jsx';
import { PageSpinner } from '../components/ui/Spinner.jsx';

export default function AboutPage() {
  const { data: page, isLoading } = useQuery({
    queryKey: ['page', 'about'],
    queryFn: () => getPage('about'),
  });

  if (isLoading) return <PageSpinner />;

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero */}
      <div
        className="relative h-64 sm:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${page.heroImage})` }}
      >
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Who We Are</p>
          <h1 className="font-serif text-display-lg text-ivory">{page.title}</h1>
          <DividerCenter className="mt-4" />
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {page.sections?.map((s, i) => (
          <div key={i} className="text-center">
            <h2 className="font-serif text-2xl text-ivory mb-4">{s.heading}</h2>
            <p className="text-ivory-muted leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
