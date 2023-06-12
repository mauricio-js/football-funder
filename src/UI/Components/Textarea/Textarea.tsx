import React, { useState, useCallback } from "react";
import classNames from "classnames";

interface Props {
  value: string;
  limit?: number;
  showLeftCharacters: boolean;
  title: string;
  height: string;
}

export const Textarea: React.FC<Props> = ({
  value,
  limit,
  title,
  height,
  showLeftCharacters,
}) => {
  const [content, setContent] = useState<string>(value.slice(0, limit));

  const setFormattedContent = useCallback(
    (text: string) => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <div className="relative">
      <textarea
        className={classNames(
          "w-full h-[124px] px-[14px] pb-4 pt-6 generalText rounded-10 border-2",
          "border-gray-200 focus:outline-none box-border",
          height
        )}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setFormattedContent(event.target.value);
        }}
      />
      {showLeftCharacters && (
        <div
          className="absolute bottom-[10px] right-[10px] text-[10px] leading-[14px]
       text-gray-400"
        >
          {content.length}/{limit} characters left
        </div>
      )}
      <div className="absolute w-full top-[12px] px-[16px] ">
        <div className="text-[10px] leading-[14px] text-gray-400 after:content-['*'] after:ml-1 after:text-green-10">
          {title}
        </div>
      </div>
    </div>
  );
};
