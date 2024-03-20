import { LeftPart } from "../Components/NavBar/LeftPart";
import { MiddlePart } from "../Components/NavBar/MiddlePart";
import { RightPart } from "../Components/NavBar/RightPart";

export default function Navbar() {
  return (
    <div className=" text-text flex items-center justify-between p-4 ">
      {/* Left Part */}
      <LeftPart />
      {/* Middle Part */}
      <MiddlePart />
      {/* Right Part */}
      <RightPart />
    </div>
  );
}
