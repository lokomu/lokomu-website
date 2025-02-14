import { BlurredBackground } from "@/components/Common/BlurredBackground";
import { LearnMoreButton } from "../Common/LearnMoreButton";
import config from "~/next.config.js";

export function Hero() {
  return (
    <section id="home" className="z-10 overflow-hidden">
      <BlurredBackground
        src={config.basePath + "/images/landing.webp"}
        fullHeight
        blur={10}
        shade="var(--black-a8)"
        bgPosition="center"
      >
        <div className="flex items-center justify-center text-center">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] items-center justify-center text-center">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="animate-fade-in bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Gather. Share. Connect
                  </span>
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-gray-200 dark:text-body-color-dark sm:text-lg md:text-xl">
                  Gather with other students. Share your things. Connect as a
                  community
                </p>
                <LearnMoreButton />
              </div>
            </div>
          </div>
        </div>
      </BlurredBackground>
    </section>
  );
}
