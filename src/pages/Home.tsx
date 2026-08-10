import BlobCard from "../components/BlobCard";
import RightCard from "../components/RightCard";

function Home() {
  return (
    <div className="w-screen h-screen px-60 py-10">
      <div className="grid grid-cols-3 w-full h-full">
        {/* Left Card */}
        <div className="h-full col-span-2 flex justify-center">
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
              className="w-full h-full relative"
            >
              {/* Inside card wrapper */}
              <div className="h-533px grid grid-cols-[2.2fr_1fr_1fr] gap-2 mt-[8%]">
                {/* Gyarados card */}
                <div
                  className="w-full h-full bg-contain bg-no-repeat relative"
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

                  <span className="font-pixel text-2xl -rotate-90 absolute bottom-20 left-4">
                    $49
                  </span>
                </div>

                {/* Raichu card */}
                <div
                  className="w-full h-full bg-contain bg-no-repeat relative"
                  style={{
                    backgroundImage: "url('images/raichu-card.svg')",
                  }}
                >
                  <img src="images/raichu-img.svg" alt="Raichu image" />

                  <span className="absolute top-10 -rotate-90 font-pixel text-2xl">
                    $12
                  </span>

                  <img
                    src="images/arrow.svg"
                    alt=""
                    className="absolute bottom-35 left-4"
                  />

                  <h1 className="absolute font-cereal text-6xl bottom-8 left-5">
                    Raichu
                  </h1>
                </div>

                {/* Guess who card */}
                <div
                  className="w-full h-full bg-contain bg-no-repeat relative flex flex-col"
                  style={{
                    backgroundImage: "url('images/guess-card.svg')",
                  }}
                >
                  <img
                    src="images/guess-img.svg"
                    alt="Guess image"
                    className="absolute bottom-0 right-0"
                  />
                  {/* Win reward and icon wrapper */}
                  <div className="flex gap-8 pt-2">
                    {/* Win rewards wrapper */}
                    <div className="flex flex-col items-center gap-1 pl-5">
                      {/* Row atas: icon + WIN */}
                      <div className="flex items-end gap-2">
                        <img
                          src="/images/ice-cream.svg"
                          alt="Popsicle icon"
                          className=""
                        />
                        <span className="font-pixel text-sm leading-none">
                          WIN
                        </span>
                      </div>

                      {/* Row bawah: REWARDS */}
                      <span className="font-pixel text-sm leading-none">
                        REWARDS
                      </span>
                    </div>
                    <img src="images/arrow.svg" alt="Arrow icon" />
                  </div>
                  <div className="p-5 mt-8">
                    <h1 className="text-6xl font-cereal">Guess who</h1>
                  </div>
                </div>
              </div>
            </BlobCard>
            <div className="absolute bottom-3 flex flex-col gap-5">
              <p className="font-cereal text-6xl">Unleash your</p>
              <p className="font-cereal text-6xl">pixel passion with</p>
              <p className="font-cereal text-6xl">
                captivating game collection
              </p>
            </div>
            <div className="absolute b">
              <img src="/images/floating-text.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="h-full flex flex-col items-center">
          <div className="bg-white p-5 rounded-[20px] mb-2 shrink-0 w-86.5">
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
            ></RightCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
