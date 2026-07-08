export type HerdFigureProps = {
  imageUrl: string;
  caption: string;
  figureVariant: string;
};

export const HerdFigure = (props: HerdFigureProps) => {
  return (
    <figure
      className={`bg-[oklch(0.985_0.015_85)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)] ${props.figureVariant}`}
    >
      <img
        src={props.imageUrl}
        alt={props.caption}
        className="aspect-square box-border caret-transparent max-w-full object-cover outline-[3px] w-full"
      />
      <figcaption className="text-sm bg-[oklch(0.85_0.19_92)] box-border caret-transparent tracking-[-0.14px] leading-5 outline-[3px] px-3 py-2 border-t-[3px] border-solid border-[oklch(0.16_0.03_260)] font-bungee">
        {props.caption}
      </figcaption>
    </figure>
  );
};
