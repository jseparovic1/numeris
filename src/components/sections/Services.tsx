export default function Services() {
  const services = [
    {
      title: "Knjigovodstvo",
      description: "Kompletno vođenje poslovnih knjiga za obrte i poduzeća",
      icon: (
        <svg className="w-16 h-16 mb-6 text-[#9d2d2d] mx-auto transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18V3zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: "Porezno savjetovanje",
      description: "Stručni savjeti za optimizaciju poreznih obveza",
      icon: (
        <svg className="w-16 h-16 mb-6 text-[#9d2d2d] mx-auto transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      )
    },
    {
      title: "Financijsko planiranje",
      description: "Izrada financijskih planova i analiza poslovanja",
      icon: (
        <svg className="w-16 h-16 mb-6 text-[#9d2d2d] mx-auto transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="usluge" className="py-12 md:py-20 bg-white text-[#0e2442]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Naše Usluge</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group bg-[#0e2442]/5 p-6 md:p-8 rounded-lg hover:bg-white transition-all duration-300 
                text-center flex flex-col items-center cursor-pointer
                hover:scale-[1.02] hover:shadow-xl"
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 transition-colors group-hover:text-[#9d2d2d]">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-[#0e2442]/80 transition-colors group-hover:text-[#0e2442]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 