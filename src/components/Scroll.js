import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const scrollOptions = {
  smooth: true,
  getDirection: true,
  touchMultiplier: 3,
  multiplier: 1.2,
  lerp: 0.1,
  firefoxMultiplier: 100,
  getSpeed: true,
  resetNativeScroll: true,
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
};

const Scroll = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      ...scrollOptions,
    });

    locomotiveScroll.update();

    // Exposing to the global scope for ease of use.
    window.locomotiveScroll = locomotiveScroll;

    // locomotiveScroll.on("scroll", ScrollTrigger.update);
    locomotiveScroll.on("call", (name, dir) => {
      const event = new Event(`${name}-${dir}`)
      window.dispatchEvent(event)
    })

    const smoothScroll = document.querySelector(".smooth-scroll")

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: smoothScroll?.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
    ScrollTrigger.refresh();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return null;
};

export default Scroll;
