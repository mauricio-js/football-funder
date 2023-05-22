import React, { useState } from "react";
import Arrow from "Assets/images/svg/white-arrow";
import EnglandFlag from "Assets/images/icon-united-kingdom.png";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "gb", name: "English" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "es", name: "Spanish" },
];

const SelectLanguage: React.FC = () => {
  const [language, setLanguage] = useState<Languages>(languages[0]);
  const LANGUAGE_SELECTOR_ID = "language-selector";

  interface Languages {
    code: string;
    name: string;
  }

  return (
    <div className="relative">
      <div id={LANGUAGE_SELECTOR_ID} className="text-[14px] text-white">
        <div
          className="flex flex-row gap-1"
          onClick={() => setLanguage(languages[0])}
        >
          <img src={EnglandFlag} alt="" />
          {language.name}
        </div>
        <div className="absolute mx-1 top-1 left-14 items-center px-2">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default SelectLanguage;
