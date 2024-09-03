import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
  };

  return (
    <Slider {...settings} className="header">
      <div className="main">
        <div className="righ">
          <div className="head">We Are Venom!</div>
          <p>
            We are Venom, a symbiotic force of chaos and power. Bound by a
            unique connection, we embody strength and resilience. Driven by a
            mix of rage and justice, we fight against threats and embrace the
            darker side of heroism. Fear our relentless force!
          </p>
        </div>
      </div>
      <div className="main1">
        <div className="righ" style={{ color: "green" }}>
          <div className="head">I am DeadPool!</div>
          <p>
            I'm Deadpool, the Merc with a Mouth. Armed with humor and an arsenal
            of weapons, I break the fourth wall and dive into chaos. With my
            regenerative powers and unpredictable antics, I fight crime and make
            you laugh while doing it. Expect the unexpected!
          </p>
        </div>
      </div>
      <div className="main2">
        <div className="righ">
          <div className="head">Hi! There I am Doctor Strange</div>
          <p>
            I am Doctor Strange, master of the mystic arts. Using ancient spells
            and mystical relics, I protect reality from dark forces. With wisdom
            and power, I navigate the multiverse to safeguard the fabric of
            existence. Prepare for a journey beyond imagination.
          </p>
        </div>
      </div>
      <div className="main3">
        <div className="righ" style={{ color: "black" }}>
          <div className="head">Hi! There I am Thanos or Inevitable</div>
          <p>
            I am Thanos, the force of destruction and balance in the universe.
            Believing in restoring order, I seek the Infinity Stones for
            ultimate power. My resolve is unyielding, and my will is
            unbreakable. As the harbinger of destiny, nothing can stop what is
            inevitable.
          </p>
        </div>
      </div>
      <div className="main4">
        <div className="righ">
          <div className="head">Hi! There We are Avengers</div>
          <p>
            We are Marvel's heroes, united to protect the world from
            unimaginable threats. With unique powers and unwavering resolve, we
            fight for justice and safety. From Thor's might and Iron Man's
            genius to Captain America's courage and Spider-Man's agility, we
            stand together as Earth's mightiest defenders.
          </p>
        </div>
      </div>
      <div className="main5">
        <div className="righ">
          <div className="head">Hi! There I am Bruce Banner</div>
          <p>
            I am the Hulk, a force of rage and power. When angered, I transform
            into a giant with immense strength. My fury is unmatched, and my
            might is formidable. Though I protect when needed, my power is a
            double-edged sword—both dangerous and uncontrollable.
          </p>
        </div>
      </div>
      <div className="main6">
        <div className="righ">
          <div className="head">Hi! There I am Black Panther</div>
          <p>
            I am T'Challa, the Black Panther, King of Wakanda. With strength and
            agility from the heart-shaped herb, I protect my people and uphold
            my nation's legacy. Clad in Vibranium, I fight for justice and the
            future of Wakanda.
          </p>
        </div>
      </div>
      <div className="main7">
        <div className="righ">
          <div className="head">Hi! There I am Thor</div>
          <p>
            I am Thor, the God of Thunder and protector of Asgard and Midgard.
            With my enchanted hammer Mjölnir, I command lightning and storms. I
            fight for justice and the safety of all realms. My strength is
            unmatched, and my resolve is unbreakable.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default MainCarousel;
