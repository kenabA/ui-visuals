import { Icon } from "@iconify/react";
import UiLogo from "../../../public/ui-visuals-logo-white.svg";
import { Separator } from "../ui/separator";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import abstract from "../../assets/images/white-abstract.png";

export default function Hero() {
  gsap.registerPlugin(useGSAP);
  const [arrowClicked, setArrowClicked] = useState<boolean>(false);
  const container = useRef<HTMLDivElement | null>(null);
  const figureContainer = useRef<HTMLDivElement | null>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const rotateX = useRef<gsap.QuickToFunc | null>(null);
  const rotateY = useRef<gsap.QuickToFunc | null>(null);
  const scaleTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      gsap.from(".logo-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });
      gsap.to(".logo-container", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
      });
      gsap.from(".subtitle", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.6,
      });
      gsap.to(".subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
      });
      gsap.from("[data-animate='line-left']", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
      gsap.to("[data-animate='line-left']", {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
      });
      gsap.from("[data-animate='line-right']", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
      gsap.to("[data-animate='line-right']", {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
      });
      gsap.from(".arr", { y: 100, opacity: 0 });
      gsap.to(".arr", { y: 0, opacity: 1 });
      gsap.from(".arr", {
        y: -10,
        repeat: -1,
        repeatDelay: 0.1,
        yoyo: true,
      });
      gsap.from(".arr", {
        y: 0,
        repeat: -1,
        repeatDelay: 0.1,
        yoyo: true,
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      if (arrowClicked) {
        gsap.from("[data-animate='line-left']", {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
        });
        gsap.to("[data-animate='line-left']", {
          x: -100,
          opacity: 0,
          duration: 1,
          delay: 0.4,
        });

        gsap.from("[data-animate='line-right']", {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
        });
        gsap.to("[data-animate='line-right']", {
          x: 100,
          opacity: 0,
          duration: 1,
          delay: 0.4,
        });
        gsap.from(".subtitle", {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
        });
        gsap.to(".subtitle", {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0.6,
        });
      }
    },
    { dependencies: [arrowClicked] },
  );

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".flair", "x", {
        duration: 0.8,
        ease: "circ",
      });
      yTo.current = gsap.quickTo(".flair", "y", {
        duration: 0.8,
        ease: "circ",
      });
      rotateX.current = gsap.quickTo(".flair", "rotationX", {
        duration: 0.8,
        ease: "circ",
      });
      rotateY.current = gsap.quickTo(".flair", "rotationY", {
        duration: 0.8,
        ease: "circ",
      });
      scaleTo.current = gsap.quickTo(".flair", "scale", {
        duration: 0.8,
        ease: "circ",
      });
    },
    { scope: container },
  );

  const moveShape = contextSafe(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const strength = 0.03; // smaller = more subtle movement
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) * strength;
      const offsetY = (e.clientY - innerHeight / 2) * strength;
      xTo.current?.(offsetX);
      yTo.current?.(offsetY);
    },
  );

  return (
    <section
      className="relative h-dvh w-full bg-onyx overflow-hidden"
      onMouseMove={(e) => moveShape(e)}
      ref={container}
    >
      <figure className="size-full scale-[1.05] opacity-50">
        <img
          className="size-full flair"
          src={abstract}
          alt="Background abstract "
        />
      </figure>
      <main className="absolute top-1/2 left-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8">
        <figure ref={figureContainer} className="logo-container ">
          <img src={UiLogo} alt="Logo of UI Visuals Community" />
        </figure>
        <div className="flex items-center gap-4">
          <Separator
            data-animate={"line-left"}
            orientation="horizontal"
            className="!w-[72px] bg-[#ABBAAB] "
          />
          <h3 className="subtitle bg-gradient-to-r from-[#ABBAAB] to-white bg-clip-text text-[clamp(1rem,0.705rem+1.2422vw,1.5rem)] font-semibold tracking-[.1em] text-nowrap text-transparent uppercase">
            leading through design
          </h3>
          <Separator
            data-animate={"line-right"}
            orientation="horizontal"
            className="!w-[72px] bg-white "
          />
        </div>
      </main>
      <div className="absolute bottom-0 flex h-[calc((100dvh-378px)/2)] w-full items-center justify-center">
        <button
          onClick={() => setArrowClicked(true)}
          className="flex arr
flex-col -space-y-5 items-center justify-center size-fit"
        >
          <Icon className="text-green size-8" icon={"mingcute:down-fill"} />
          <Icon className="text-green size-8" icon={"mingcute:down-fill"} />
        </button>
      </div>
    </section>
  );
}
