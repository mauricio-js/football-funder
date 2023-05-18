import React from 'react';
import SelectLanguage from 'UI/Components/SelectLanguage/SelectLanguage';
import SocialSiteLink from './SocialSiteLink';
import GuideList from './GuideList';
import FooterLogoImage from 'Assets/images/footer-logo.png';
import FacebookIcon from 'Assets/images/svg/icon-facebook';
import InstagramIcon from 'Assets/images/svg/icon-instagram';
import LinkdedinIcon from 'Assets/images/svg/icon-linkedin';
import TwitterIcon from 'Assets/images/svg/icon-twitter';
import YoutubeIcon from 'Assets/images/svg/icons-youtube';

const Footer: React.FC = () => {
  const guideItems = [
    {
      handleClick: () => console.log('Clicked About'),
      label: 'About',
    },
    {
      handleClick: () => console.log('Clicked Terms & Conditions'),
      label: 'Terms & Conditions',
    },
    {
      handleClick: () => console.log('Clicked Privacy Policy'),
      label: 'Privacy Policy',
    },
    {
      handleClick: () => console.log('Clicked Fraud Policy'),
      label: 'Fraud Policy',
    },
    {
      handleClick: () => console.log('Clicked Cookies'),
      label: 'Cookies',
    },
  ];
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
    <div className="grid grid-cols-4 gap-4 mt-[150px] bg-green-40 rounded-t-[30px] py-8 px-5">
      <div className="col-span-3 flex flex-col gap-8">
        <div>
          <img src={FooterLogoImage} alt="footer-logo" className="" />
        </div>
        <div>
          <GuideList guideItems={guideItems} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[14px] font-medium leading-[25px] text-white ">
            © 2023 Football Funder - All Rights Reserved Operated by Aquariux Limited
          </div>
          <div className="text-[16px] font-medium leading-[22px] text-white ">
            <SelectLanguage />
          </div>
        </div>
        <SocialSiteLink socialLink={socialLink} className="justify-start" />
      </div>
    </div>
  );
};

export default Footer;
