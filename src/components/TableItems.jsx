import tableData from "../tabledata";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";

export default function TableItems(props) {
  return (
    <div className="flex flex-col gap-5 text-gray-300 font-bold md:text-sm sm:text-xs items-stretch ">
      {tableData.map((data) => (
        <div
          key={data.id}
          className="bg-semimidnight drop-shadow-md flex items-center gap-6 px-10  text-left py-5"
        >
          <div className="rounded-full bg-goldicon/50 w-1/12 text-center">
            {data.icon}
          </div>
          <div className="w-3/12">{data.name}</div>
          <div className="w-3/12 ">
            {data.shortform} {data.value}
          </div>
          <div className="w-3/12">USD 0.5268</div>
          <div className="w-1/12 font-bold text-violet flex items-center cursor-pointer">
            <BsArrowDownLeft /> {" "} RECIEVE
          </div>
          <div className="w-1/12 font-bold text-center text-gray-600">|</div>
          <div className="w-1/12 font-bold text-semigold flex items-center">
            SEND {" "} <BsArrowUpRight />
          </div>
        </div>
      ))}
      {/* <ModalTransition>
        {isOpen && (
          <Modal onClose={() => setIsOpen(false)} autoFocus={false}>
            <div className="bg-semimidnight h-52 focus:outline-none flex flex-col px-20 py-12  text-gray-300">
              <div className="text-2xl text-center"> Recieve</div>
              <div className="stepper">
                {" "}
               
              </div>
            </div>
          </Modal>
        )}
      </ModalTransition> */}
    </div>
  );
}
