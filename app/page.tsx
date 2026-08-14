// import Image from "next/image";
// import Hero from "./components/Hero";
// import { FaHome } from "react-icons/fa";
// import { FloatingNav } from "./components/ui/FloatingNav";
// import Grid from "./components/Grid";
// import RecentProject from "./components/RecentProject";
// import { navItems } from "@/data";
// import Experience from "./components/Experience";
// import Approach from "./components/Approach";
// import Footer from "./components/Footer";
// import Skills from "./components/Skills";

// export default function Home() {
//   return (
//     <main className="relative overflow-clip bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Skills/>
//         <Grid />
//         <RecentProject />
//         {/* <Clients /> */}
//         <Experience />
//         <Approach />
//         <Footer />
//       </div>
//     </main>
//   );
// }


import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative overflow-clip bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <h1 className="text-white text-4xl">
          Test Vercel
        </h1>
      </div>
    </main>
  );
}