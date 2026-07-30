import BlobCard from "../components/BlobCard";
import RightCard from "../components/RightCard";

function Home() {
  return (
    <div className="w-screen h-screen px-60 py-17">
      <div className="grid grid-cols-3 w-full h-full">
        {/* Left Card */}
        <div className="h-full col-span-2 flex justify-center border-2 border-rose-600">
          <BlobCard
            bgImage="/images/left-card.svg"
            className="h-full aspect-1045/943"
          >
            {/* <h2 className="text-3xl font-bold">Gyarados</h2> */}
            {/* <img src="/pokemon/gyarados.png" alt="Gyarados" className="w-32" /> */}
          </BlobCard>
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
