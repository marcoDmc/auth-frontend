/* eslint-disable no-undef */
import * as Component from "./main.styled";
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
import { MdOutlineCopyright } from "react-icons/md";
import confetti from "../../assets/image-confetti.jpg";
import plane from "../../assets/image-plane.jpg";
import restaurant from "../../assets/image-restaurant.jpg";
import currency from "../../assets/image-currency.jpg";

import Button from "../button/button";

import { useState } from "react";

const Main = ({ logout }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <Component.Header toggle={toggle}>
        <img src={logo} />
        <div onClick={handleToggle} className="header__toggle">
          <div className="header__btn__toggle"></div>
        </div>

        <ul className="header__list">
          <li className="header__li">home</li>
          <li className="header__li">about</li>
          <li className="header__li">contact</li>
          <li className="header__li">blog</li>
          <li className="header__li">careers</li>
        </ul>

        <Button children="request invite" />
      </Component.Header>
      <Component.Main toggle={toggle}>
        <div className="main__mask" onClick={handleToggle}></div>
        <section className="main__container__one">
          <div className="main__title_one">
            <h1>
              Next generation <br /> digital banking
            </h1>
            <p>
              Take your financial life online. Your Easybank account will be
              one-stop-shop for speding, saving,
              <br /> budgeting,investing, and much more.
            </p>

            <Button children="request invite" />
          </div>
          <div className="main__section__mockup">
            <img src={mockups} className="main__img_phone" />
          </div>
        </section>

        <section className="main__container__two">
          <div className="main__title__two">
            <h2>Why choose Easybank ?</h2>
            <p>
              We leverage Open Banking toturn your bank account into your
              financial hub. <br /> Control your finances like never before.
            </p>
          </div>

          <div className="main__cards">
            <div className="main__container__two__cards">
              <img src={online} />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="main__container__two__cards">
              <img src={budgeting} />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you're close to hiting your limits.
              </p>
            </div>
            <div className="main__container__two__cards">
              <img src={onBoarding} />
              <h3>Fast Onboarding</h3>
              <p>
                We don't do branches. open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="main__container__two__cards">
              <img src={api} />
              <h3>Open API</h3>
              <p>
                Manage your savings , investments ,pension , and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>

        <section className="main__container__three">
          <h3>Lastest Articles</h3>
          <div className="main__cards">
            <div className="main__container__three__cards">
              <img src={currency} />
              <small>By Claire Robinson</small>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be foorced to only receive money in a single...
              </p>
            </div>
            <div className="main__container__three__cards">
              <img src={restaurant} />
              <small>By Wilson Hutton</small>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                speding and set realistic limits each month. That means you..
              </p>
            </div>
            <div className="main__container__three__cards">
              <img src={plane} />
              <small>By Wilson Hutton</small>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad., We'll even show
                you...
              </p>
            </div>
            <div className="main__container__three__cards">
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
      </Component.Main>
      <Component.Footer toggle={toggle}>
        <div className="footer__social__networks">
          <img src={logo} />
          <span className="footer__networks">
            <img src={facebook} />
            <img src={youtube} />
            <img src={twitter} />
            <img src={pinterest} />
            <img src={instagram} />
          </span>
        </div>

        <ul className="footer__list">
          <li className="item1">About Us</li>
          <li className="item2">Contact</li>
          <li className="item3">Blog</li>
          <li className="item4">Carees</li>
          <li className="item5">Support</li>
          <li className="item6">Privacy Policy</li>
        </ul>
        <div className="footer__rights__reserved">
          <Button children="request invite" />
          <small>
            <MdOutlineCopyright />
            Easybank. All Rights Reserved
          </small>
        </div>
      </Component.Footer>
    </>
  );
};

export default Main;
