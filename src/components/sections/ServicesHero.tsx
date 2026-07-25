
export function ServicesHero() {
  return (
    <section className="relative w-full bg-slate-900 py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/10 blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-3xl opacity-30 pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Comprehensive Services Directory
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl">
          Find the perfect <span className="text-primary">artisan</span> for your next project.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12">
          Browse our extensive catalog of verified professionals. From quick repairs to complete renovations, we have the right expert for you.
        </p>
      </div>
    </section>
  );
}
