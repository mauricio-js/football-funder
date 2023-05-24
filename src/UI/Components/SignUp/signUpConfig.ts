import { SignUpOption, FormDataType } from 'types'

export const signUpSelectFormData: SignUpOption[] = [
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

 export const organisationFormData: FormDataType[] = [
    {
      id: 1,
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      label: "Organisation Name",
      type: "text",
    },
    {
      id: 4,
      label: "Email",
      type: "email",
    },
    {
      id: 5,
      label: "Phone Number",
      type: "tel",
    },
    {
      id: 6,
      label: "Website",
      type: "tel",
    },
  ];
 export const individualFormData: FormDataType[] = [
    {
      id: 1,
      label: "First Name",
      type: "text",
    },
    {
      id: 2,
      label: "Last Name",
      type: "text",
    },
    {
      id: 3,
      label: "Email",
      type: "email",
    },
    {
      id: 4,
      label: "Phone Number",
      type: "tel",
    },
  ];