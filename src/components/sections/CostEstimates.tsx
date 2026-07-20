import { costEstimates } from "../../data";

export function CostEstimates() {
  return (
    <section className="w-full py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get free cost estimates</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Compare quotes from top-rated providers, to help you make smart hiring decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {costEstimates.map((estimate, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="aspect-4/3 w-full relative">
                <img 
                  src={estimate.image} 
                  alt={estimate.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">{estimate.title}</h3>
                <p className="text-slate-500 text-sm mb-4">
                  <span className="text-slate-700 font-medium">{estimate.priceRange}</span> <span className="text-slate-400">{estimate.condition}</span>
                </p>
                <a href={estimate.link} className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors">
                  Read more &raquo;
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-md transition-colors">
            View All Cost Estimates
          </button>
        </div>
      </div>
    </section>
  );
}
