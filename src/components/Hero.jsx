import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full h-[90vh] bg-black text-white relative">
      {" "}
      {/* Changed from h-screen to h-[60vh] */}
      {/* Carousel Section */}
      <div className="w-full h-full flex overflow-hidden relative">
        {/* Carousel Images - Changed to flex instead of grid for better control */}
        <div className="flex w-full h-full">
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src="public/lovable-uploads/30315751-a916-433d-857a-e5d75106d2cd.png"
              alt="Player 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src="public/lovable-uploads/ba988972-5746-4196-ac76-150124d63bd0.png"
              alt="Player 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src="public/lovable-uploads/c331aa5e-a4f7-49ee-a87f-2579961e6679.png"
              alt="Player 4"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <div className="text-center">
            <Button
              onClick={() => window.location.href = "/catalog"}
              size="lg"
              className="
              focus:outline-none focus:ring-0

                bg-white/4 text-white 
                px-10 py-6 text-lg font-bold 
                border-2 border-white/30
                hover:border-white/40 
                hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.45)]
                hover:bg-white/4
                hover:scale-105
                transition-all duration-300
                rounded-md
              "
            >
              SHOP NOW
            </Button>

          </div>
        </div>

        {/* Carousel Indicators (Static design for now)
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
