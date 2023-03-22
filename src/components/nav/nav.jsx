import "./nav.css";
import { AiOulineHome } from "react-icons/ai";
import { AiOulineUser } from "react-icons/ai";
import { TiGroupOutLine } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className="navigation">
        <a href="#home">
          <AiOulineHome className="icon active-nav" />
        </a>
        <a href="#home">
          <AiOulineUser className="icon" />
        </a>
        <a href="#home">
          <TiGroupOutLine className="icon" />
        </a>
        <a href="#home">
          <BiMessageRoundedDots className="icon" />
        </a>
        <a href="#home">
          <BsArrowDownCircle className="icon " />
        </a>
      </div>
    </>
  );
}
let Icons = document.querySelectorAll(".navigation .icon");
Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeactive();
    icon.classList.add("active-nav");
  });
});

function changeactive() {}
