export type HowToBuyStepProps = {
  stepNumber: string;
  title: string;
  description: string;
};

export const HowToBuyStep = (props: HowToBuyStepProps) => {
  return (
    <div className="bg-[oklch(0.985_0.015_85)] shadow-[oklch(0.16_0.03_260)_6px_6px_0px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] p-5 rounded-xl border-[3px] border-solid border-[oklch(0.16_0.03_260)]">
      <div className="items-center box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3">
        <span className="text-lg items-center bg-[oklch(0.85_0.19_92)] box-border caret-transparent flex h-10 justify-center tracking-[-0.18px] leading-7 min-h-[auto] min-w-[auto] outline-[3px] w-10 rounded-[10px] border-[3px] border-solid border-[oklch(0.16_0.03_260)] font-bungee">
          {props.stepNumber}
        </span>
        <h3 className="text-xl box-border caret-transparent tracking-[-0.2px] leading-7 min-h-[auto] min-w-[auto] outline-[3px] font-bungee">
          {props.title}
        </h3>
      </div>
      <p className="text-[oklch(0.38_0.04_260)] text-sm box-border caret-transparent leading-5 outline-[3px] mt-3">
        {props.description}
      </p>
    </div>
  );
};
