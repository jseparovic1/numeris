export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-white text-[#0e2442]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O nama</h2>
        <div className="max-w-4xl mx-auto bg-[#0e2442] text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col items-start gap-8">
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-4">Numeris</h3>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Mladi i dinamičan tim stručnjaka s bogatim iskustvom u području računovodstva i financija. 
                Našu strast prema preciznosti i kontinuiranom usavršavanju pretačemo u vrhunsku uslugu za naše klijente. 
                Kombiniramo tradicionalne računovodstvene vrijednosti s modernim pristupom poslovanju.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-sm">Profesionalnost</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-sm">Inovativnost</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-sm">Pouzdanost</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 