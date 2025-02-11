export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = `Upit od ${formData.get('name')}`;
    const body = formData.get('message');
    window.location.href = `mailto:josip.strikic@numeris.hr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body as string)}`;
  };

  return (
    <section id="kontakt" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Kontakt</h2>
        <div className="max-w-xl mx-auto">
          <div className="mb-6 md:mb-8 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-4">Josip Strikić</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+385981234567" 
                className="hover:text-[#9d2d2d] transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                +385914930178
              </a>
              <a 
                href="mailto:josip.strikic@numeris.hr"
                className="hover:text-[#9d2d2d] transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                josip.strikic@numeris.hr
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Vaše ime i prezime"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#9d2d2d] text-sm md:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Email adresa"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#9d2d2d] text-sm md:text-base"
            />
            <textarea
              name="message"
              placeholder="Vaša poruka"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#9d2d2d] text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full bg-[#9d2d2d] hover:bg-[#8a2828] text-white px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Pošalji upit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 