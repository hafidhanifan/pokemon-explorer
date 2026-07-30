import BlobCard from "../components/BlobCard";

function Home() {
  return (
    <div className="w-screen h-screen px-60 py-17">
      <div className="grid grid-cols-3 w-full h-full">
        {/* Left Card */}
        <div className="h-full col-span-2 flex justify-center">
          <BlobCard
            bgImage="/images/left-card.svg"
            className="h-full aspect-1045/943"
          >
            {/* <h2 className="text-3xl font-bold">Gyarados</h2> */}
            {/* <img src="/pokemon/gyarados.png" alt="Gyarados" className="w-32" /> */}
          </BlobCard>
        </div>

        {/* Right Card */}
        <div className="border-2 border-blue-600">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
