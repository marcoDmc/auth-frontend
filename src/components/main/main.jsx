/* eslint-disable no-undef */
import { Wrapper } from "./main.styled";
import logo from "../../assets/logo.svg";
import mockups from "../../assets/image-mockups.png";
import online from "../../assets/icon-online.svg";
import onBoarding from "../../assets/icon-onboarding.svg";
import budgeting from "../../assets/icon-budgeting.svg";
import api from "../../assets/icon-api.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";

import confetti from "../../assets/image-confetti.jpg";
import plane from "../../assets/image-plane.jpg";
import restaurant from "../../assets/image-restaurant.jpg";
import currency from "../../assets/image-currency.jpg";

import { useState } from "react";

const Main = ({ logout }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Wrapper isToggle={toggle}>
      <header>
        <img src={logo} />
        <div onClick={handleToggle} id="container-toggle">
          <div id="toggle"></div>
        </div>
       
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>blog</li>
          <li>careers</li>
        </ul>

        <button>request invite</button>
      </header>
      <main>
      <div id="masck"></div>
        <section>
          <div>
            <h1>next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be
              one-stop-shop for speding, saving, budgeting,investing, and much
              more.
            </p>

            <button>request Invite</button>
          </div>
          <div className="mockup">
            <img src={mockups} />
          </div>
        </section>
        <section>
          <div>
            <h2>Why choose Easybank ?</h2>
            <p>
              We leverage Open Banking toturn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="cards-one">
            <div>
              <img src={online} />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div>
              <img src={budgeting} />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you're close to hiting your limits.
              </p>
            </div>
            <div>
              <img src={onBoarding} />
              <h3>Fast Onboarding</h3>
              <p>
                We don't do branches. open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div>
              <img src={api} />
              <h3>Open API</h3>
              <p>
                Manage your savings , investments ,pension , and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>
        <section className="cards-two">
          <h3>Lastest Articles</h3>
          <div className="cards">
            <div>
              <img src={currency} />
              <small>By Claire Robinson</small>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be foorced to only receive money in a single...
              </p>
            </div>
            <div>
              <img src={restaurant} />
              <small>By Wilson Hutton</small>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                speding and set realistic limits each month. That means you..
              </p>
            </div>
            <div>
              <img src={plane} />
              <small>By Wilson Hutton</small>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad., We'll even show
                you...
              </p>
            </div>
            <div>
              <img src={confetti} />
              <small>B Claire Robinson</small>
              <h3>Our invite-only Beta accounts are now live!</h3>
              <p>
                After a lot of hard work by the whote team , We're excited to
                lauch our closed beta. It's easy to request an invite throught
                the site...
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <img src={logo} />
          <span>
            <img src={facebook} />
            <img src={youtube} />
            <img src={twitter} />
            <img src={pinterest} />
            <img src={instagram} />
          </span>
        </div>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Carees</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
        <div>
          <button>Rquest Invite</button>
          <small>Easybank. All Rights Reserved</small>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Main;
