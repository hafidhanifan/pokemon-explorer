import BlobCard from "../components/BlobCard";
import RightCard from "../components/RightCard";

function Home() {
  return (
    <div className="w-screen h-screen px-60 py-17">
      <div className="grid grid-cols-3 w-full h-full">
        {/* Left Card */}
        <div className="h-full col-span-2 flex justify-center border-2 border-rose-600">
          <div className="relative h-full aspect-1045/943">
            {/* Mushroom icon - tetep di luar/pojok, biarin nongol keluar dikit */}
            <img
              src="/images/mushroom.svg"
              alt="Mushroom"
              className="absolute top-3 left-2 w-12 h-12 z-20"
            />

            {/* Navbar - masuk ke dalam card */}
            <nav className="absolute top-2 left-20 right-6 h-14 bg-white rounded-full flex items-center px-6 z-10">
              <ul className="flex gap-12 font-cereal text-xl">
                <li>Home</li>
                <li className="font-pixel text-stroke-black text-transparent bg-clip-text bg-linear-to-r from-[#00E3B5] to-[#F9C62C]">
                  Explorer
                </li>
                <li>About</li>
              </ul>
            </nav>

            <BlobCard
              bgImage="/images/left-card.svg"
              className="w-full h-full relative p-5"
            >
              <div
                className="w-1/2 h-[553px] bg-contain bg-no-repeat absolute bottom-34 left-0"
                style={{
                  backgroundImage: "url('images/purple-inside-card.svg')",
                }}
              >
                <div className="relative">
                  <h1 className="font-cereal text-5xl ml-5 mt-2">Gyarados</h1>

                  {/* Arrow icon */}
                  <img
                    src="/images/arrow.svg"
                    alt="Arrow icon"
                    className="absolute right-2 top-1"
                  />
                </div>

                <img
                  src="images/gyarados.svg"
                  alt="Gyarados image"
                  className="absolute -left-10"
                />

                <span className="font-pixel text-xl -rotate-90 absolute bottom-36 left-4">
                  $49
                </span>
              </div>
            </BlobCard>
          </div>
        </div>

        {/* Right Card */}
        <div className="border-2 border-blue-600 h-full flex flex-col items-center">
          <div className="bg-white p-5 rounded-[20px] mb-2 shrink-0 w-75">
            <p className="font-cereal text-xl">
              Welcome to Pokémon Explorer. Here, you'll find three
              features—Search and Pokémon Details—along with over 20 Pokémon for
              you to view.
            </p>
          </div>
          <div className="flex-1 min-h-0 flex justify-center">
            <RightCard
              bgImage="/images/right-card.svg"
              className="h-full aspect-335/658"
            >
              {/* <h2 className="text-3xl font-bold">Gyarados</h2> */}
              {/* <img src="/pokemon/gyarados.png" alt="Gyarados" className="w-32" /> */}
            </RightCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
