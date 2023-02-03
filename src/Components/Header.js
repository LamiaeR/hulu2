import Image from "next/image";
import HeaderIcons from "./HeaderIcons";
import { HomeIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
 } from "@heroicons/react/24/outline";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto" >
      <div className=" flex flex-grow justify-evenly max-w-2xl ">
        <HeaderIcons title="HOME" Icon={HomeIcon}/>
        <HeaderIcons title="TRENDING" Icon={BoltIcon}/>
        <HeaderIcons title="VERIFIED" Icon={CheckBadgeIcon}/>
        <HeaderIcons title="COLLECTIONS" Icon={RectangleStackIcon}/>
        <HeaderIcons title="SEARCH" Icon={MagnifyingGlassIcon}/>
        <HeaderIcons title="ACCOUNT" Icon={UserIcon}/>

      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu "
      />
    </header>
  );
}
export default Header;
