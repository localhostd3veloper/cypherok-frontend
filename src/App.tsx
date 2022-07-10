import Sidebar from "./components/Sidebar";
import TableItems from "./components/TableItems";

import { BiLockAlt } from "react-icons/bi";
import { BsCircleHalf, BsCheckCircle, BsFunnel } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { TbArrowsUpDown } from "react-icons/tb";

const App = () => {
  return (
    <div className="flex flex-col items-stretch h-screen bg-midnight">
      <div className="h-18 border-b-2 p-4 border-gray-700">
        <img
          src="https://www.cypherock.com/assets/logo.svg"
          alt="logo-img"
          className="h-12"
        />
      </div>
      <div className="flex items-stretch h-screen">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12 px-20 flex flex-col pt-4 gap-7">
          <div className="ml-auto text-semigold flex gap-4 items-center">
            <div id="sync" className="flex gap-2 mr-8 items-center text-lg">
              <BsCheckCircle className="text-blue-600 text-lg" /> Synchronised
            </div>
            <button className="bg-semimidnight text-white p-3 text-xl rounded-lg">
              <BsCircleHalf />
            </button>
            <button className="bg-semimidnight p-3 text-xl rounded-lg">
              <BiLockAlt />
            </button>
          </div>
          <div className="flex">
            <div className="text-3xl font-bold text-gold">Wallet 1 </div>
            <div className="ml-auto">
              <button className="text-semigold text-lg bg-semimidnight py-2 px-6 rounded">
                + Add Coin
              </button>
            </div>
          </div>
          <div className="border-2 py-2 px-5 text-semigold flex items-center  border-semimidnight">
            <div className="text-lg">Total Coins - 3</div>
            <div className="ml-auto flex items-center gap-16">
              <div className="gap-2 flex items-center">
                <BsFunnel /> <span className="text-gray-100">Year</span>
                <AiOutlineDown />
              </div>
              <div className="gap-2 flex items-center">
                <TbArrowsUpDown /> <span className="text-gray-100">A-Z</span>
                <AiOutlineDown />
              </div>
            </div>
          </div>
          <TableItems />
        </div>
      </div>
    </div>
  );
};

export default App;
