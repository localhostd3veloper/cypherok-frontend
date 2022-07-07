import Sidebar from "./components/Sidebar";
import { BiLockAlt } from "react-icons/bi";
import { BsCircleHalf, BsCheckCircle, BsFunnel } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { TbArrowsUpDown } from "react-icons/tb";
import tableData from "./tabledata";
function App() {
  return (
    <h1 className="h-screen w-screen bg-midnight flex flex-col">
      <div className="h-18 border-b-2 p-4 border-gray-700">
        <img
          src="https://www.cypherock.com/assets/logo.svg"
          alt="logo-img"
          className="h-12"
        ></img>
      </div>
      <div className="">
        <Sidebar />
        <div className="pl-72" id="body">
          <div className="px-20 flex flex-col pt-4 gap-7">
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
              <div className="text-lg">Total Coin - 3</div>
              <div className="ml-auto flex items-center gap-16">
                <div className="gap-2 flex items-center">
                  <BsFunnel /> <span className="text-gray-100">Year</span>{" "}
                  <AiOutlineDown />
                </div>
                <div className="gap-2 flex items-center">
                  <TbArrowsUpDown /> <span className="text-gray-100">A-Z</span>{" "}
                  <AiOutlineDown />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-gray-300 font-bold">
              {tableData.map((data, index) => (
                <div className="bg-semimidnight drop-shadow-md flex items-center px-10 justify-between text-left py-5">
                  <div className="rounded-full bg-goldicon">ICON</div>{" "}
                  <div>{data.name}</div>
                  <div>{data.shortform} </div>
                  <div>{data.value} </div> USD 0.5268 RECIEVE SEND
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </h1>
  );
}

export default App;
