export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[100svh] relative">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/images/logo.svg"
          alt="Numeris Logo"
          className="mx-auto w-[400px] md:w-[600px] max-w-[90%] transition-all"
        />
      </div>
      
      {/* Animated Arrow */}
      <div className="absolute bottom-12 animate-pulse hidden md:block">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="text-white/60 hover:text-white/90 transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </section>
  )
} 