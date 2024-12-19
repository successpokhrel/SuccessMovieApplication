import { Button } from "../ui/button";
import "../../App.css";
import { Outlet, useNavigate } from "react-router";
import usePersonalStore from "../../../stores/PersonalStore";
import {  LuList, LuLogOut, LuStar, LuLogIn } from "react-icons/lu";
const CustomNavbar = () => {
  const { isLogged, logOut } = usePersonalStore();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div>
          
        </div>
        <div>
          {isLogged ? (
            <div className="flex flex-row gap-4">
              <Button variant={'outline'} onClick={()=>navigate('/favorites')}><LuStar/>Favorites</Button>
              <Button variant={'outline'} onClick={()=>navigate('/watchlist')}><LuList/>Watchlist</Button>
              <Button variant={'secondary'} onClick={()=>logOut()}><LuLogOut/>Logout</Button>
            </div>
          ) : (
            <Button variant={"outline"} onClick={()=>navigate('/login')}><LuLogIn/>Login</Button>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CustomNavbar;
