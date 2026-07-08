export const EditorBadge = () => {
  return (
    <aside
      role="complementary"
      aria-label="Edit with Lovable"
      className="fixed text-stone-300 text-xs items-center bg-zinc-900 shadow-[rgba(0,0,0,0.88)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_1px_0px_0px,rgba(0,0,0,0.08)_0px_2px_2px_-1px,rgba(0,0,0,0.08)_0px_4px_4px_-2px,rgba(0,0,0,0.08)_0px_8px_8px_-4px,rgba(0,0,0,0.08)_0px_16px_16px_-8px] box-border caret-transparent hidden h-6 leading-[18px] outline-[3px] z-[1000000] rounded-md right-3 bottom-3 font-cameraplainvariable"
    >
      <a
        href="https://lovable.dev/projects/d304373f-1d59-4f4d-9245-a72ffe5db638?utm_source=lovable-badge"
        aria-label="Edit with Lovable"
        className="items-center box-border caret-transparent gap-x-1.5 flex h-full outline-[3px] gap-y-1.5 text-nowrap px-2 rounded-l-md hover:text-neutral-300 hover:bg-white/0"
      >
        <span className="box-border caret-transparent block leading-3 outline-[3px] text-nowrap">
          Edit with
        </span>
        <img
          src="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-[52px]"
        />
      </a>
      <span className="bg-white/0 box-border caret-transparent shrink-0 h-6 outline-[3px] w-px"></span>
      <button
        aria-label="Dismiss"
        title="Dismiss"
        type="button"
        className="items-center bg-transparent caret-transparent flex shrink-0 h-6 justify-center min-h-6 min-w-6 outline-[3px] text-center w-6 p-0 rounded-r-md hover:bg-white/0"
      >
        <img
          src="https://c.animaapp.com/mrcgbuuvHkxteQ/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] w-4"
        />
      </button>
    </aside>
  );
};
