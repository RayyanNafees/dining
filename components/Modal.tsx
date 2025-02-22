import type { JSX } from "preact";

export const Modal = ({ children }: { children: JSX.Element }) => (
  <>
    <label  for="modal-1">{children}</label>
<input class="modal-state" id="modal-1" type="checkbox" />
<div class="modal">
	{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
<label class="modal-overlay" for="modal-1" />
	<div class="flex flex-col gap-5 modal-content">
		<label for="modal-1" class="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost">✕</label>
		<h2 class="text-xl">Modal title 1</h2>
		<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
		<div class="flex gap-3">
			<button type="button" class="btn btn-error btn-block">Delete</button>

			<button type="button" class="btn btn-block">Cancel</button>
		</div>
	</div>
</div>
  </>
);
