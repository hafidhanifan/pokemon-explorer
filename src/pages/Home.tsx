import BlobCard from "../components/BlobCard";

function Home() {
  return (
    <div className="grid grid-cols-[6fr_4fr]">
      {/* Left Card */}
      <div className="min-h-screen p-5 border border-red-500">
        <BlobCard bgImage="/images/left-card.svg" className="min-h-full">
          <h2 className="text-3xl font-bold">Gyarados</h2>
          {/* <img src="/pokemon/gyarados.png" alt="Gyarados" className="w-32" /> */}
        </BlobCard>
      </div>

      {/* Right Card */}
    </div>
  );
}

export default Home;
