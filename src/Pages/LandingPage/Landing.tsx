import React from 'react';

import SingUpSelectForm from 'UI/Components/SignUp';
import IPadBackImg from './IPadBackImg';
import SocialSiteLink from '../../UI/Components/Footer/SocialSiteLink';
import Footer from '../../UI/Components/Footer';

import TopImg from 'Assets/images/desktop-logo-back-image.png';
import HeaderLogoImage from 'Assets/images/logo.png';
import FirstIpadImage from 'Assets/images/first-ipad.png';
import SecondIpadImage from 'Assets/images/second-ipad.png';
import SurveyMask from 'Assets/images/survery-mask.png';

import FacebookIcon from 'Assets/images/svg/icon-facebook';
import InstagramIcon from 'Assets/images/svg/icon-instagram';
import LinkdedinIcon from 'Assets/images/svg/icon-linkedin';
import TwitterIcon from 'Assets/images/svg/icon-twitter';
import YoutubeIcon from 'Assets/images/svg/icons-youtube';

export function Landing() {
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
    <div className="bg-green-70">
      {/* part-landing page background */}
      <div
        className="relative bg-cover bg-no-repeat bg-center h-[536px]"
        style={{
          backgroundImage: `url(${TopImg})`,
        }}
      >
        {/* part-Landing Page Logo */}
        <div className="absolute top-[330px] z-30 w-full">
          <img src={HeaderLogoImage} alt="Football Funder" className="mx-auto" />
          <div
            className="relative mt-[30px] mb-[64px] mx-auto
              h-[66px] sm:h-[44px]
              w-[368px] sm:w-[498px] max-ns:w-[280px]"
          >
            <p className="absolute top-0 text-base font-medium text-center leading-[22px] text-white">
              The new home for football clubs and organisations that provides support with
              fundrasing, advertising and sponsorship.
            </p>
          </div>
        </div>
      </div>
      {/* Part-Sign In */}
      <SingUpSelectForm />
      {/* Part - first Ipad Image */}
      <div className="mt-[100px]">
        <IPadBackImg
          ipadBack={{
            imageSrc: FirstIpadImage,
            title:
              'Promote your organisation’s commercial interests on a football exclusive platform',
            description:
              'Our crowdfunding engine and advertising and sponsorship marketplace provides exposure for your club or organisation, regardless of size.',
          }}
        />
      </div>
      {/* third-part : second ipad image */}
      <div className="relative mt-[60px]">
        <IPadBackImg
          ipadBack={{
            imageSrc: SecondIpadImage,
            title:
              'Market your football brand and reach larger audiences with our campaign support',
            description:
              ' We’ll provide you with a dedicated profile to support your commercial activity and engage the audience you want to reach, all while being cost efficient.',
          }}
        />
      </div>
      {/* part-top div property absolute remove */}
      <div className="mt-[100px] h-[310px]">
        <div
          className="relative bg-auto bg-no-repeat bg-center h-[310px] mx-auto "
          style={{
            backgroundImage: `url(${SurveyMask})`,
          }}
        >
          <div className="absolute top-[85px] w-full">
            <div className="mx-auto w-[330px] max-ns:w-[300px]">
              <p className="text-[21px] font-semibold leading-[28px] text-white mx-auto">
                Take our Grassroots Survey and win <span className="text-green-10">£100</span> in
                vouchers
              </p>
              <div className="mt-[10px] bg-green-10 rounded-10">
                <div className="px-[10px] py-[15px] text-center font-semibold text-[16px] leading-[20px]">
                  Survey
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* part - socialSite link */}
      <div className="mt-[50px] px-[31px]">
        <p className="text-[16px] font-medium leading-[22px] text-white text-center">
          Follow our social media for updates
        </p>
        <div className="mt-5 w-full">
          <SocialSiteLink socialLink={socialLink} className="justify-center" />
        </div>
      </div>
      {/* part - footer */}
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
}
