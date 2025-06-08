import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black text-white relative">
      {/* Carousel Section */}
      <div className="w-full h-full flex overflow-hidden relative">
        {/* Carousel Images */}
        <div className="grid grid-cols-3 w-full h-full">
          <img src="public/lovable-uploads/30315751-a916-433d-857a-e5d75106d2cd.png" alt="Player 1" className="object-cover w-full h-full" />
          <img src="public/lovable-uploads/ba988972-5746-4196-ac76-150124d63bd0.png" alt="Player 2" className="object-cover w-full h-full" />
          <img src="public/lovable-uploads/c331aa5e-a4f7-49ee-a87f-2579961e6679.png" alt="Player 4" className="object-cover w-full h-full" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <div className="text-center">
            <Button
              size="lg"
              className="bg-transparent text-white px-10 py-4 text-l font-bold  hover:outline hover:outline-2 hover:outline-purple-500 transition-all duration-200 border p-7"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* Carousel Indicators (Static design for now) */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
