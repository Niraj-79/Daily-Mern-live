import passportPhoto from "../assets/Niraj.png";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
      <div>
        <div className="font-bold text-3xl">Mr. Niraj Kumar</div>
        <div className="text-xl">Full Stack Developer</div>
      </div>
      <img className="rounded-full w-24" src={passportPhoto} alt="" />
    </header>
  );
};

export default Header;
