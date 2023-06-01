import { IPadDataType } from "types";
import { SignUpOptionType, FormDataType } from 'types'
import FirstIpadImage from "Assets/images/landing/first-ipad.png";
import SecondIpadImage from "Assets/images/landing/second-ipad.png";

export const IPadData: IPadDataType[] = [
    {
        imageSrc: FirstIpadImage,
        title:
        "Promote your organisation’s commercial interests on a football exclusive platform",
        description1:
        "Our crowdfunding engine and advertising and sponsorship marketplace provides exposure for your club or organisation, regardless of size.",
        description2:
          "Whether you're raising crucial funds, or have branding opportunities available, our platform is committed to ensuring your goals are met."
    },
    {
        imageSrc: SecondIpadImage,
        title:
            "Market your football brand and reach larger audiences with our campaign support",
        description1:
            " We’ll provide you with a dedicated profile to support your commercial activity and engage the audience you want to reach, all while being cost efficient.",
        description2:
            "If you have a cause or commercial opportunity you'd like to promote further, we can help with that too."
    }
]


export const SignUpSelectFormData: SignUpOptionType[] = [
    {
      id: 1,
      label: "Organisation",
      value: "organisation",
    },
    {
      id: 2,
      label: "Individual",
      value: "individual",
    },
  ];

 export const OrganisationFormData: FormDataType[] = [
    {
      id: 1,
     label: "First Name",
     textSize: "text-[20px]",
      padding:" px-3 py-4",
      height:"h-[58px]",
      type: "text",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 2,
      label: "Last Name",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "text",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 3,
      label: "Organisation Name",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "text",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 4,
      label: "Email",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "email",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 5,
      label: "Phone Number",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "tel",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 6,
      label: "Website",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "tel",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
  ];
 export const IndividualFormData: FormDataType[] = [
    {
      id: 1,
     label: "First Name",
     height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
     type: "text",
      content:"after:content-['*'] after:ml-1 after:text-green-10"
    },
    {
      id: 2,
      label: "Last Name",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "text",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 3,
      label: "Email",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "email",
      content:"after:content-['*'] after:ml-1 after:text-green-10 "
    },
    {
      id: 4,
      label: "Phone Number",
      height: "h-[58px]",
      textSize: "text-[20px]",
      padding:" px-3 py-4",
      type: "tel",
      content:"after:content-['*'] after:ml-1 after:text-green-10"
    },
  ];