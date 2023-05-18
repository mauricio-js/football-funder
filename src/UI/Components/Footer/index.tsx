import React from 'react';
import SelectLanguage from 'UI/Components/SelectLanguage/SelectLanguage';
import SocialSiteLink from './SocialSiteLink';
import FooterLogoImage from 'Assets/images/footer-logo.png';
import FacebookIcon from 'Assets/images/svg/icon-facebook';
import InstagramIcon from 'Assets/images/svg/icon-instagram';
import LinkdedinIcon from 'Assets/images/svg/icon-linkedin';
import TwitterIcon from 'Assets/images/svg/icon-twitter';
import YoutubeIcon from 'Assets/images/svg/icons-youtube';

const Footer: React.FC = () => {
  const handleClick = () => {
    console.log('You clicked this itmes');
  };

  const socialLink = [
    {
      handleClick: () => console.log('Clicked Facebook'),
      icon: FacebookIcon,
    },
    {
      handleClick: () => console.log('Clicked Instargram'),
      icon: InstagramIcon,
    },
    {
      handleClick: () => console.log('Clicked Twitter'),
      icon: TwitterIcon,
    },
    {
      handleClick: () => console.log('Clicked Linkedin'),
      icon: LinkdedinIcon,
    },
    {
      handleClick: () => console.log('Clicked YouTube'),
      icon: YoutubeIcon,
    },
  ];
  return (
    // <div className="grid grid-cols-4 gap-4 mt-[150px] bg-green-40 rounded-t-[30px] py-8 px-5">
    //   <div className="col-span-3 flex flex-col gap-8">
    //     <div>
    //       <img src={FooterLogoImage} alt="footer-logo" className="" />
    //     </div>
    //     <div>
    //       <GuideList guideItems={guideItems} />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <div className="text-[14px] font-medium leading-[25px] text-white ">
    //         © 2023 Football Funder - All Rights Reserved Operated by Aquariux Limited
    //       </div>
    //       <div className="text-[16px] font-medium leading-[22px] text-white ">
    //         <SelectLanguage />
    //       </div>
    //     </div>
    //     <SocialSiteLink socialLink={socialLink} className="justify-start" />
    //   </div>
    // </div>
    <div
      className="
    bg-green-40 mt-[150px] p-[60px] 
    max-sm:px-[20px] max-sm:py-[30px] 
    max-lg:rounded-t-[30px]
    "
    >
      {/* <div className="grid grid-cols-5 gap-4">
        <div className="col-start-1">
          <img src={FooterLogoImage} alt="footer-logo" />
        </div>
        <div className="col-start-2 col-span-4  ml-[60px]  text-[14px] font-medium leading-[25px] text-white ">
          <div className="flex flex-row gap-[30px]">
            <div onClick={handleClick}>About</div>
            <div onClick={handleClick}>Terms & Conditions</div>
            <div onClick={handleClick}>Privacy Policy</div>
            <div onClick={handleClick}>Cookie</div>
          </div>
        </div>
      </div>
      <div className="col-start-1 col-end-3 text-[14px] font-medium leading-[25px] text-white ">
        © 2023 Football Funder - All Rights Reserved Operated by Aquariux Limited
      </div>
      <div className="col-start-1 col-end-3 text-[16px] font-medium leading-[22px] text-white items-center">
        <SelectLanguage />
      </div>
      <div className="col-end-6">
        <SocialSiteLink socialLink={socialLink} className="justify-end" />
      </div> */}
      <div className="grid grid-cols-6 gap-5">
        <div className="col-1 max-lg:col-start-1 max-lg:col-end-5">
          <img src={FooterLogoImage} alt="footer-logo" />
        </div>
        <div className="col-start-2 col-end-5 items-center max-lg:col-start-1 max-lg:col-end-5">
          <div className="flex flex-row max-lg:flex-col max-lg:gap-[10px] gap-[30px] text-[14px] font-medium leading-[25px] text-white">
            <div onClick={handleClick}>About</div>
            <div onClick={handleClick}>Terms & Conditions</div>
            <div onClick={handleClick}>Privacy Policy</div>
            <div onClick={handleClick}>Cookie</div>
          </div>
        </div>
        <div className="col-start-1 col-span-2 max-lg:col-start-1 max-lg:col-end-6">
          <div className="text-[14px] font-medium leading-[25px] text-white ">
            © 2023 Football Funder - All Rights Reserved Operated by Aquariux Limited
          </div>
        </div>
        <div className="col-1 max-lg:col-start-1 max-lg;col-end-5 text-[16px] font-medium leading-[22px] text-white items-center">
          <SelectLanguage />
        </div>
        <div className="col-start-5 col-end-7 max-lg:col-start-1 max-lg:col-end-5">
          <SocialSiteLink socialLink={socialLink} className="justify-start" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
