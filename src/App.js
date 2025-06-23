import Portfolio from "./portfolio.json";
import { FaLongArrowAltRight, FaGithub, FaGlobe} from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col gap-20 bg-black h-full text-white px-20 py-10">
      <div className="flex flex-col gap-4 sm:w-1/2 w-full items-start">
        <h1 className="text-3xl font-bold">Imah Ugochukwu</h1>
        <p>
          Hi, I'm Imah Ugochukwu — a passionate front-end developer who loves
          turning ideas into responsive, interactive web experiences. I'm
          currently exploring the full-stack but specialize in HTML, CSS,
          TailwindCss, Bootstrap, JavaScript, and React.
        </p>
        <a href="#Contact" className="bg-red-400 px-3 py-1 hover:bg-red-600 rounded-md">
          {" "}
          Get in touch
        </a>
      </div>
      <div className="flex flex-col gap-20">
        <h1 className="text-3xl font-bold flex flex-col gap-3">
          <span>My Work</span> <hr className="w-20 border-t-4 border-red-500" />
        </h1>
        <div className="flex flex-col gap-44">
          {Portfolio.map((item) => (
            <div className="flex sm:flex-row flex-col-reverse justify-between gap-5">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold mb-7">{item.name}</h1>
                <p>{item.activity}</p>
                <p>{item.skills}</p>
                <p>{item.Features}</p>
                <div className="flex gap-3">
                  <a href={item.link} className="flex flex-col gap-2 hover:text-red-500 w-40 p-3">
                    <span className="flex gap-4 items-center"><span>Visit Site</span> <FaGlobe className="text-white"/><FaLongArrowAltRight/></span> {" "}
                    <hr className="border-t-4 border-red-500 w-10" />{" "}
                  </a>
                  <a href={item.code} className="flex flex-col gap-2 hover:text-red-500 w-fit p-3">
                    <span className="flex gap-4 items-center"><span>See code</span> <FaGithub className="text-white"/> <FaLongArrowAltRight/></span> {" "}
                    <hr className="border-t-4 border-red-500 w-10" />{" "}
                  </a>
                </div>
              </div>
              <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} className="sm:w-2/5 w-full" alt={item.name}/>
            </div>
          ))}
        </div>
      </div>
      <div id="Contact" className="flex flex-col gap-3">
        <h1 className="text-2xl mb-2 font-bold">📫 Contact Me</h1>
        <address>📧 ugochukwuaugustine@gmail.com</address>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/imah-ugochukwu-48b912184/" className="text-blue-600 underline">imah-ugochukwu</a></p>
      </div>
    </div>
  );
}

export default App;
