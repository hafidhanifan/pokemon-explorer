import { Routes, Route } from "react-router";
import GradientBg from "./components/GradientBg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";

function App() {
  return (
    <GradientBg className="min-w-screen min-h-screen">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </GradientBg>
  );
}

export default App;

/*
- Navbar ditaruh di luar Routes karena navbar selalu tampil di semua halaman, sementara isi di dalam <Routers> yang berganti-ganti mengikuti URL. Jika Navbar ditaruh pada <Routes> maka hanya akan muncul sekali saja

*/
