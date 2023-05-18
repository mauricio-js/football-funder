import React, { useState } from 'react';
import SelectFormArrow from 'Assets/images/svg/select-form-arrow';
import EnglandFlag from 'Assets/images/icon-united-kingdom.png';

const languages = [
  { code: 'gb', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'it', name: 'Italian' },
  { code: 'es', name: 'Spanish' },
  // add more languages and countries here
];

const SelectLanguage: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Languages>(languages[0]);
  const LANGUAGE_SELECTOR_ID = 'language-selector';

  interface Languages {
    code: string;
    name: string;
  }

  // const handleLanguageMenu = () => {
  //   setIsOpen(!isOpen);
  //   console.log('isOpen', isOpen);
  // };
  // const handleLanguageChange = () => {
  //   setIsOpen(false);
  // };
  // useEffect(() => {
  //   const handleWindowClick = (event: any) => {
  //     const target = event.target.matches('div');
  //     if (target && target.id === LANGUAGE_SELECTOR_ID) {
  //       setIsOpen(true);
  //     }
  //     // setIsOpen(false);
  //   };
  //   window.addEventListener('click', handleWindowClick);
  //   return () => {
  //     window.removeEventListener('click', handleWindowClick);
  //   };
  // }, []);

  return (
    <div className="relative">
      <div id={LANGUAGE_SELECTOR_ID} className="text-[14px] text-white">
        <div className="flex flex-row" onClick={() => setLanguage(languages[0])}>
          <img src={EnglandFlag} alt="" />
          {language.name}
        </div>
        <div className="absolute top-0 left-14 items-center px-2 text-gray-700">
          <SelectFormArrow />
        </div>
        {/* {isOpen && (
          <div className="">
            {languages.map((language, index) => {
              return (
                <div key={index} className="d-flex" onClick={handleLanguageChange}>
                  <span className={`fi fis fi-${language.code} mr-1`}></span>
                  {language.name}
                </div>
              );
            })}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SelectLanguage;
