
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium Hotel
              <br />
              <span className="text-purple-200">Cleaning Supplies</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-lg">
              Professional-grade cleaning products designed specifically for hotels, 
              resorts, and hospitality businesses. Quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
                SHOP NOW
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-purple-200">Hotels Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-purple-200">Support</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-purple-200">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold">48h</div>
                <div className="text-purple-200">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
