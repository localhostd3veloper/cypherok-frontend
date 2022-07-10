import { IconType } from "react-icons/lib/cjs";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

interface TableData {
  id: number;
  name: string;
  icon: IconType;
  shortform: string;
  value: number | string;
}

const tableData: Array<TableData> = [
  {
    id: 0,
    name: "BITCOIN",
    icon: BsCurrencyBitcoin,
    shortform: "BTC",
    value: (0.00256).toFixed(7),
  },
  {
    id: 1,
    name: "ETHEREUM",
    icon: FaEthereum,
    shortform: "ETH",
    value: (0.00256).toFixed(7),
  },
  {
    id: 2,
    name: "BINANCE COIN",
    icon: SiBinance,
    shortform: "BNB",
    value: (0.00256).toFixed(7),
  },
  {
    id: 3,
    name: "BITCOIN",
    icon: BsCurrencyBitcoin,
    shortform: "BTC",
    value: (0.00256).toFixed(7),
  },
  {
    id: 4,
    name: "ETHEREUM",
    icon: FaEthereum,
    shortform: "ETH",
    value: (0.00256).toFixed(7),
  },
];

export default tableData;
