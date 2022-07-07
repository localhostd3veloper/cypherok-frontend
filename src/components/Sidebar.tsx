import navs from "../navs";
export default function Sidebar() {
  return (
    <div
      className="bg-semimidnight/40 w-72 fixed h-screen duration-500"
      id="sidebar"
    >
      <div className="h-screen flex flex-col items-center text-left duration-700 ease-in-out gap-9 pt-7 text-white">
        {navs.map((nav) => (
          <div
            key={nav.id}
            className="text-lg cursor-pointer transition-all hover:text-gold"
          >
            {nav.name}
            <div className="pl-3">
              {nav.sub?.map((subnav, index) => (
                <div key={index} className="text-sm font-semibold text-gold">
                  {subnav.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
