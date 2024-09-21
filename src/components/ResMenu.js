import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const param = useParams();
  console.log("params --->", param);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch("/Menu.json");
    console.log("response", response);

    const data = await response.json();
    console.log("data -> ", data);
  };

  return (
    <div>
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Dosa</li>
      </ul>
    </div>
  );
};
export default ResMenu;
