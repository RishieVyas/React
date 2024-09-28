import { useEffect } from "react";
import { useParams } from "react-router-dom";
import resMenu from "../../resMenu";

const ResMenu = () => {
  const param = useParams();
  console.log("params --->", param);

  return (
    <div key={param.resId} className="text-center">
      {resMenu.map((menu) => {
        return (
          <div key={menu.id}>
            <h1 className="font-bold p-5 text-xl">{menu.name}</h1>
            <p>Menu</p>
            {menu.menu.map((x) =>
              x.items.map((y) => {
                return (
                  <ul key={y.id}>
                    <li>{y.name}</li>
                  </ul>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ResMenu;
