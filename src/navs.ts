interface Navigation {
  id: number;
  name: string;
  url: string;
  sub?: [
    {
      name: string;
      url: string;
    }
  ];
}
const navs: Array<Navigation> = [
  {
    id: 0,
    name: "Portfolio",
    url: "/",
  },
  {
    id: 1,
    name: "Wallets",
    url: "/",
    sub: [
      {
        name: "Wallet 1",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    name: "Last Transactions",
    url: "/",
  },
  { id: 3, name: "Tutorials", url: "/" },
  { id: 4, name: "Settings", url: "/" },
];

export default navs;
