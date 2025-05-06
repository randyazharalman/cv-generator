// src/components/layout/Sidebar.tsx

import { LuComponent, LuPencilRuler } from "react-icons/lu";


interface SideBarMenu {
  id: number;
  title: string;
  icon: React.ReactNode;
}
const sideBarMenu: SideBarMenu[] = [
  {
    id: 1,
    title: "Content",
    icon: <LuComponent style={{ width: "35px", height: "40px" }} />,
  },
  {
    id: 2,
    title: "Customize",
    icon: <LuPencilRuler style={{ width: "25px", height: "25px" }} />,
  },
];
const Sidebar = () => {
  return (
    <aside className="w-auto p-2 mt-5 bg-white h-auto rounded-2xl backdrop-blur-2xl">
      {sideBarMenu.map((m) => {
        return (
          <div
            onClick={()=> (m.id === 2? alert("Customization not available yet "): null)}
            key={m.id}
            className=" cursor-pointer rounded-xl  mt-2 "
          >
            <div className="flex flex-col items-center mt-2 justify-center text-center  p-2" >
              {m.icon}
              <span className="">{m.title}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
