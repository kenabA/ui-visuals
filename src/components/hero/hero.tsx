import UiLogo from "../../../public/ui-visuals-logo-white.svg";
import { Separator } from "../ui/separator";

export default function Hero() {
  return (
    <section className="bg-onyx relative h-dvh w-full">
      <main className="absolute top-1/2 left-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8">
        <figure>
          <img src={UiLogo} alt="Logo of UI Visuals Community" />
        </figure>
        <div className="flex items-center gap-4">
          <Separator
            orientation="horizontal"
            className="!w-[72px] bg-[#ABBAAB]"
          />
          <h3 className="bg-gradient-to-r from-[#ABBAAB] to-white bg-clip-text text-2xl font-semibold tracking-[.1em] text-transparent uppercase">
            leading through design
          </h3>
          <Separator orientation="horizontal" className="!w-[72px] bg-white" />
        </div>
      </main>
    </section>
  );
}
