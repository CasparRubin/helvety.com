import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center">
          <Image
            src="/logo_whiteBg.svg"
            alt="Helvety logo"
            width={4000}
            height={1000}
            className="w-full h-auto mb-24"
            priority
          />
          <div className="space-y-2">
            <p className="text-xl md:text-2xl leading-snug">
              <span>Software and Apparel</span>
            </p>
            <p className="text-sm md:text-base text-black/70">developed and designed in <span className="text-[#FF0000]">Switzerland</span></p>
          </div>
          <div className="border-t border-black/30 mt-24 mb-8" />
          <p className="text-base md:text-lg text-black/50">contact@helvety.com</p>
        </div>
      </div>
    </main>
  );
}
