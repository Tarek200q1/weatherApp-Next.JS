import Image from "next/image";
import SearchBar from "../components/SearchBar";
import WeatherResult from "../components/WeatherResult";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
      <div className="relative z-20">
  <Navbar />
</div>

        <Image
          src="/earth.jpg"
          alt="Earth background"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="w-full max-w-2xl space-y-6">
            <SearchBar />
            <WeatherResult />
          </div>
        </div>
      </div>
    </>
  );
}
