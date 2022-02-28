import { Wrapper } from "./main.styled";
import logo from "../../assets/logo.svg";
import console from "../../assets/console.jpg";
import gameboy from "../../assets/gameboy.jpg";
import vr from "../../assets/vr.jpg";
import keys from "../../assets/keys.jpg";
import { BsGearWide, BsWindows } from "react-icons/bs";
import { RiLogoutCircleLine, RiGameFill } from "react-icons/ri";
import { SiUnity, SiUnrealengine } from "react-icons/si";
import { useState } from "react";

const Main = ({ logout }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Wrapper toggle={toggle}>
      <header>
        <img src={logo} />
        <ul>
          <li>products</li>
          <li>services</li>
          <li>contact</li>
          <li>suporte</li>
        </ul>
        <menu>
          <img
            src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            onClick={handleToggle}
          />

          <nav>
            <li onClick={logout}>
              <RiLogoutCircleLine className="RiLogoutCircleLine" />
              logout
            </li>
            <li>
              <BsGearWide className="<BsGearWide" />
              config
            </li>
          </nav>
        </menu>
      </header>
      <main>
        <section>
          <h1>be yourself, work on your passion</h1>
          <p>
            We curate bold ideas and transform them into fast-growing products -
            from concept, through development, to global market expansion. With
            endless passion and years of experience in the mobile industry, our
            products have reached over 65 million users across 160 countries on
            6 continents - and we’re just getting started. We are a family of
            people who are lucky enough to work on our passion. We push forward
            the limits without the fear of making mistakes. We work hard to be a
            few steps ahead of others. We trust in our creative thinking while
            keeping both feet on the ground when it comes to measurement and
            analytics. We are addicted to continuously developing our skills &
            moving forward. We design, measure, build, repeat. We believe in the
            code way of things.
          </p>
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            dolorum aspernatur voluptate tempora porro veniam minima
            necessitatibus accusamus dicta? Nulla cum harum ipsam mollitia
            delectus deserunt, soluta praesentium adipisci ullam!
          </p>
          <img src={keys} />
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            dolorum aspernatur voluptate tempora porro veniam minima
            necessitatibus accusamus dicta? Nulla cum harum ipsam mollitia
            delectus deserunt, soluta praesentium adipisci ullam!
          </p>
          <img src={console} />
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            dolorum aspernatur voluptate tempora porro veniam minima
            necessitatibus accusamus dicta? Nulla cum harum ipsam mollitia
            delectus deserunt, soluta praesentium adipisci ullam!
          </p>
          <img src={gameboy} />
        </section>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            dolorum aspernatur voluptate tempora porro veniam minima
            necessitatibus accusamus dicta? Nulla cum harum ipsam mollitia
            delectus deserunt, soluta praesentium adipisci ullam!
          </p>
          <img src={vr} />
        </section>

        <section className="cards">
          <div>
            <SiUnity classNmae="SiUnity" />
            <small>unity</small>
            <p>iusagdjkasgdjkhgsakjgfkjdasgfkjhsdgfkjhadgflkghedfgakdj</p>
          </div>
          <div>
            <BsWindows classNmae="BsWindows" />
            <small>c#</small>
            <p>iusagdjkasgdjkhgsakjgfkjdasgfkjhsdgfkjhadgflkghedfgakdj</p>
          </div>
          <div>
            <SiUnrealengine className="SiUnrealengine" />
            <small>unreal</small>
            <p>iusagdjkasgdjkhgsakjgfkjdasgfkjhsdgfkjhadgflkghedfgakdj</p>
          </div>
          <div>
            <RiGameFill className="RiGameFill" />
            <small>mobile</small>
            <p>iusagdjkasgdjkhgsakjgfkjdasgfkjhsdgfkjhadgflkghedfgakdj</p>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          company
          <li>about us</li>
          <li>careers</li>
          <li>leadership</li>
          <li>partners</li>
          <li>contact us</li>
        </ul>
        <ul>
          social
          <li>linkedin</li>
          <li>twitter</li>
          <li>facebook</li>
          <li>instagram</li>
        </ul>
      </footer>
    </Wrapper>
  );
};

export default Main;
