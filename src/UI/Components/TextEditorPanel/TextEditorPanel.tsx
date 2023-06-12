import React, { useState } from "react";
import classNames from "classnames";

interface TextEditorPanelProps {
  defaultCharacters: string;
  classes: string;
  title: string;
}

export const TextEditorPanel: React.FC<TextEditorPanelProps> = ({
  defaultCharacters,
  classes,
  title,
}) => {
  const [content, setContent] = useState(defaultCharacters);
  function handleChange(event: React.FormEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    setContent(target.innerHTML);
  }

  return (
    <div className="relative">
      <div
        className={classNames(
          "px-4 pb-4 pt-6 generalText rounded-10 border-2 border-gray-200 focus:outline-none",
          classes
        )}
        contentEditable={true}
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="absolute top-[10px] left-[16px] text-[10px] leading-[14px] text-gray-400  after:content-['*'] after:ml-1 after:text-green-10">
        {title}
      </div>
    </div>
  );
};
