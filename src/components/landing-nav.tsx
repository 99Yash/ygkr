import Logo from "./ui/logo";

const Nav = () => {
  return (
    <nav className="absolute left-0 top-0 flex w-full list-none justify-between gap-4 px-4 py-2 ">
      <li>
        <Logo />
      </li>
    </nav>
  );
};

export default Nav;
