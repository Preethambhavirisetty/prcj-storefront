import { useQuery } from '@tanstack/react-query';
import { getPage } from '../api/content.js';
import { DividerCenter } from '../components/ui/Divider.jsx';
import { PageSpinner } from '../components/ui/Spinner.jsx';

export default function TrustPage() {
  const { data: page, isLoading } = useQuery({
    queryKey: ['page', 'trust'],
    queryFn: () => getPage('trust'),
  });

  if (isLoading) return <PageSpinner />;

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${page.heroImage})` }}
      >
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-3">Our Promise</p>
          <h1 className="font-serif text-display-lg text-ivory">{page.title}</h1>
          <DividerCenter className="mt-4" />
        </div>
      </div>

      {/* Trust points */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {page.points?.map((point, i) => (
            <div key={i} className="bg-obsidian-light border border-border p-8">
              <span className="text-gold text-2xl block mb-4">{point.icon}</span>
              <h3 className="font-serif text-xl text-ivory mb-3">{point.heading}</h3>
              <p className="text-ivory-muted leading-relaxed text-sm">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
