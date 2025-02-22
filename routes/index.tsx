// import { useSignal } from "@preact/signals";
import { Carousel } from "../islands/Carousel.tsx";
import Icon from "@/components/Icon.tsx";
// @ts-ignore: Need to import menu
import menu from "https://opensheet.elk.sh/1pe7T34k45hiQ9fE2vYJFjgp4vSHORgSJicVkwT68mk4/SU" with {
  type: "json",
};
import { Menu } from "@/components/Menu.tsx";
import { Modal } from "@/components/Modal.tsx";
// @ts-check

export default function Home() {
  // const count = useSignal(3);
  return (
    <main class="overflow-hidden relative w-full min-h-[100dvh] max-h-[100dvh] text-white md:(max-w-md  mx-auto) md:bg-slate-950 bg-slate-800">
      <header class="flex absolute top-0 justify-between items-center px-3 py-1 w-full bg-slate-700">
        <div class="flex gap-2 justify-start items-center">
          <Menu>
            <Icon icon="mdi:menu" className="w-6 h-6" color="#fff" />
          </Menu>
          <div>
            <h1 class="text-sm font-bold">AMU Dining</h1>
            <p class="text-xs font-semibold lowercase text-current/30">
              Sir Shah Sulaiman Hall
            </p>
          </div>
        </div>
        <div class="flex overflow-y-scroll gap-2 items-center">
          <Modal>
            <Icon icon="mdi:bell-outline" className="size-8" color="#fff" />
          </Modal>
          <Modal>
            <Icon
              icon="mdi:account-circle-outline"
              className="size-8"
              color="#fff"
            />
          </Modal>
        </div>
      </header>
      <div class="overflow-x-hidden overflow-y-scroll my-2 min-h-screen -z-100">
        <Carousel menu={menu} />
      </div>
      <footer class="flex absolute bottom-0 justify-evenly p-1 w-full bg-slate-600">
        <a
          href="/"
          class="grid place-items-center transition-transform scale-90 group hover:scale-110"
        >
          <div class="w-7 h-1 rounded-full transition-transform delay-100 scale-x-0 bg-slate-900 group-hover:scale-x-100" />

          <Icon icon="mdi:food" className="w-6 h-6" color="#171b26" />
          <span class="text-xs font-semibold lowercase text-slate-900">
            Menu
          </span>
        </a>
        <a
          href="/dinings"
          class="grid place-items-center transition-transform scale-90 group hover:scale-100"
        >
          <div class="w-7 h-1 rounded-full transition-transform delay-100 scale-x-0 bg-slate-900 group-hover:scale-x-100" />

          <Icon
            icon="mdi:food-fork-drink"
            className="w-6 h-6"
            color="#171b26"
          />
          <span class="text-xs font-semibold lowercase text-slate-900">
            Dining
          </span>
        </a>
        <a
          href="/tiffin"
          class="grid place-items-center transition-transform scale-90 group hover:scale-100"
        >
          <div class="w-7 h-1 rounded-full transition-transform delay-100 scale-x-0 bg-slate-900 group-hover:scale-x-100" />

          <Icon icon="mdi:food-turkey" className="w-6 h-6" color="#171b26" />
          <span class="text-xs font-semibold lowercase text-slate-900">
            Tiffin
          </span>
        </a>
        <a
          href="/me"
          class="grid place-items-center transition-transform scale-90 group hover:scale-100"
        >
          <div class="w-7 h-1 rounded-full transition-transform delay-100 scale-x-0 bg-slate-900 group-hover:scale-x-100" />
          <Icon
            icon="mdi:account-outline"
            className="w-6 h-6"
            color="#171b26"
          />
          <span class="text-xs font-semibold lowercase text-slate-900">
            You
          </span>
        </a>
      </footer>
    </main>
  );
}
