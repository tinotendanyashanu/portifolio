import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const Icons = document.querySelectorAll(".navigation .icon");
    function changeactive() {
      Icons.forEach((icon) => {
        icon.classList.remove("active-nav");
      });
    }
    Icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        changeactive();
        icon.classList.add("active-nav");
      });
    });
    return () => {
      Icons.forEach((icon) => {
        icon.removeEventListener("click", () => {
          changeactive();
          icon.classList.add("active-nav");
        });
      });
    };
  }, []);

  return (
    <>
      <div className="navigation">
        <a href="#home">
          <AiOutlineHome className="icon active-nav" />
        </a>
        <a href="#home">
          <AiOutlineUser className="icon" />
        </a>
        <a href="#home">
          <TiGroupOutline className="icon" />
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
// let Icons = document.querySelectorAll(".navigation .icon");
// Icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     changeactive();
//     icon.classList.add("active-nav");
//   });
// });

// function changeactive() {
//   Icons.forEach((icon) => {
//     icon.classList.remove("active-nav");
//   });
// }
export default Navbar;
