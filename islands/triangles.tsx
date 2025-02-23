import type { Signal } from "@preact/signals";
import { A } from "@/islands/counter-anchor.tsx";

export const TriangleLeft = ({
  cls,
  containerCls,
  href,
  index,
  right = false,
}: {
  cls?: string;
  containerCls?: string;
  href: string;
  index: Signal<number>;
  right?: boolean;
}) => (
  <A
    href={href}
    onClick={() => {
      right ? index.value++ : index.value--;
      document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
    // {...props}
    containerCls={containerCls}
  >
    <div
      class={`rounded-lg rotate-45 translate-x-1 translate-y-2 bg-slate-600 ${cls} size-8`}
    />
  </A>
);
export const TriangleRight = ({
  cls,
  containerCls,
  href,
  index,
}: {
  cls?: string;
  containerCls?: string;
  href: string;
  index: Signal<number>;
}) => (
  <div class="origin-center rotate-180 translate-y-1/2 size-8">
    <TriangleLeft
      cls={cls}
      containerCls={containerCls}
      href={href}
      index={index}
      right
    />
  </div>
);
