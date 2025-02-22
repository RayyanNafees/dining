import type { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 bg-white rounded border-2 border-gray-500 transition-colors hover:bg-gray-200"
    />
  );
}
