import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditorBadge } from "@/components/EditorBadge";
import { HomePage } from "@/pages/HomePage";
import { MemePage } from "@/pages/MemePage";
import { PfpPage } from "@/pages/PfpPage";

export const App = () => {
  return (
    <BrowserRouter>
      <body className="text-[oklch(0.16_0.03_260)] text-base not-italic normal-nums font-normal accent-auto bg-[oklch(0.955_0.035_85)] box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-space_grotesk">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meme" element={<MemePage />} />
          <Route path="/pfp" element={<PfpPage />} />
        </Routes>
        <EditorBadge />
      </body>
    </BrowserRouter>
  );
};
