import { Head } from "$fresh/runtime.ts";
import menuSU from "@/data/menu.json" with { type: "json" };
import { TriangleLeft, TriangleRight } from "./triangles.tsx";
import { computed, useSignal, useSignalEffect } from "@preact/signals";
import { useRef } from "preact/hooks";
type Menu = (typeof menuSU.menu)[number];

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const Carousel = ({
  menu = menuSU.menu,
}: {
  menu?: Menu[];
}) => {
  const today = useSignal(new Date().getDay() - 1);
  const index = useSignal(today.value);
  const left = computed(() => days.at((today.value - 1) % days.length));
  const right = computed(() => days.at((today.value + 1) % days.length));

  const leftId = useSignal(left);
  const rightId = useSignal(right);
  const scroll = useRef<HTMLDivElement>(null);

  useSignalEffect(() => {
    if (scroll.current) {
      scroll.current.scrollTo({
        behavior: "smooth",
        left: (today.value-2) * scroll.current?.scrollHeight,
      });
    }
  });
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/carousel.css" />
        <link rel="stylesheet" href="/triangle.css" />
      </Head>
      <p class="flex flex-wrap text-2xl text-center text-red-300">
      </p>
      <div class="grid grid-cols-12 gap-4 mx-auto mt-10 w-80">
        <div class="col-span-1 translate-y-1/2">
          <TriangleLeft href={`#${leftId}`} index={index} />
        </div>
        <div class="overflow-hidden col-span-10 mx-auto my-10 ml-4 w-64 text-center">
          <div class="flex relative justify-between items-center p-2">
            {menu.map(({ day }) => (
              <a
                href={`#${day}`}
                key={day}
                class={`grid place-items-center w-8 h-8 text-lg focus:(border border-slate-50) last:text-red-900 uppercase rounded-lg  ${
                  days[today.value] === day
                    ? "bg-slate-50 text-slate-900 scale-110 "
                    : "text-slate-900  bg-slate-500"
                }`}
              >
                {day[0].toUpperCase() === "F"
                  ? <span class="text-emerald-900">{day[0]}</span>
                  : day[0]}
              </a>
            ))}
          </div>
          <div
            ref={scroll}
            class="flex overflow-x-auto relative snap-x snap-mandatory scroll-smooth touch-pan-x slides"
          >
            {menu.map(({ day, breakfast, lunch, dinner }) => (
              <div
                key={day}
                id={`${day}`}
                class="flex overflow-y-scroll relative justify-center items-start mt-5 w-64 h-96 rounded-xl transition-transform delay-500 origin-center scale-100 snap-start shrink-0"
              >
                <ul class="grid gap-2 px-4">
                  <p class="text-xs font-semibold text-left uppercase text-slate-200/30">
                    {day === days[today.value]
                      ? "Today"
                      : day === days[today.value + 1]
                      ? "Tomorrow"
                      : day === days[today.value - 1]
                      ? "Yesterday"
                      : ""}
                  </p>
                  <p class="px-6 py-px mx-auto -mt-1 max-w-min text-xs font-semibold uppercase rounded-full border text-slate-200 bg-slate-500/10 border-slate-300">
                    {day}
                  </p>
                  <li class="p-5 w-full text-(lg center) rounded-lg bg-slate-500">
                    {breakfast}
                  </li>
                  <li class="p-5 w-full text(lg center) rounded-lg bg-slate-500">
                    {lunch}
                  </li>
                  <li class="p-5 w-full text(lg center) rounded-lg bg-slate-500">
                    {dinner}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div class="col-span-1 translate-y-1/2">
          <TriangleRight href={`#${rightId}`} index={index} />
        </div>
      </div>
    </>
  );
};
