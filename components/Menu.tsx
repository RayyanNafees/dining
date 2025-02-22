import type { JSX } from "preact";

export const Menu = ({ children }: { children: JSX.Element }) => (
  <>
    <input type="checkbox" id="drawer-left" class="drawer-toggle" />

    <label for="drawer-left" >{children}</label>
    {/* biome-ignore lint/a11y/noLabelWithoutControl: ripple-ui syntax */}
    <label class="overlay" for="drawer-left" />
    <div class="drawer">
      <div class="flex flex-col pt-10 h-full drawer-content">
        <label
          for="drawer-left"
          class="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost"
        >
          ✕
        </label>
        <div>
          <h2 class="text-xl font-medium">Create your account</h2>
          <input class="input py-1.5 my-3" placeholder="Type here..." />
        </div>
        <div class="flex flex-row gap-2 justify-end items-end h-full">
          <button class="btn btn-ghost" type="button">Cancel</button>
          <button class="btn btn-primary" type="button">Create</button>
        </div>
      </div>
    </div>
  </>
);
