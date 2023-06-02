import React from "react";
import { CategoryButtonType } from "types";

export const CategoryButton: React.FC<CategoryButtonType> = (props) => {
  return (
    // <div className="flex flex-wrap gap-[10px]">
    <div>
      <input type="radio" name="option" id={props.id} className="peer hidden" />
      <label
        htmlFor={props.id}
        className="block  cursor-pointer select-none rounded-xl px-[50px] max-md:px-[25px] py-[15px] text-green-70 
          text-[14x] leading-[20px] font-semibold 
          border-[1px] border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
      >
        {props.label}
      </label>
    </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="2"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="2"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center
    //       border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Individual
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="3"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="3"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center
    //       border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Supporters’ Trust
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="4"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="4"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center
    //        border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Local community
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="5"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="5"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center
    //       border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Foundation
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="6"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="6"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center
    //       border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       League
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="7"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="7"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center
    //       border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Charity
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="8"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="8"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center border-2
    //       border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Singing Section / Ultras
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="9"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="9"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center border-2
    //       border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Agency / Rights holder
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="10"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="10"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center border-2
    //        border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Podcast / Vlog
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="11"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="11"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center border-2
    //        border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Advertiser/Sponsor
    //     </label>
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       name="option"
    //       id="12"
    //       className="peer hidden"
    //       checked
    //     />
    //     <label
    //       htmlFor="12"
    //       className="block cursor-pointer select-none rounded-xl px-[50px] py-[15px] text-center border-2 border-gray-300 peer-checked:bg-green-10 peer-checked:border-none"
    //     >
    //       Other
    //     </label>
    //   </div>
    // </div>
  );
};
