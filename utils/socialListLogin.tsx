import { Google, Facebook, Apple, CloseCircle } from "iconsax-react";

export const SocialListLoginN = [
  { component: '<Google size="32" color="#ff4655" variant="Bold"/>' },
  { component: '<Facebook size="32" color="#0f1923" variant="Bold"/>' },
  { component: '<LinkedIn size="32" color="#0077b5" variant="Bold"/>' },
  { component: '<Twitter size="32" color="#55acee" variant="Bold"/>' },
];

export const SocialListLogin = [
  { google: "google", color: "#ff4655" },
  { facebook: "facebook", color: "#2c74e4" },
  { apple: "apple", color: "#555555" },
  { xbox: "xbox", color: "#37d67a" },
];

export const Icon = (props: any) => {
  const { google, facebook, apple, xbox, color } = props;

  return (
    <>
      {google && <Google size="32" color={color} variant="Bold" />}
      {facebook && <Facebook size="32" color={color} variant="Bold" />}
      {apple && <Apple size="32" color={color} variant="Bold" />}
      {xbox && <CloseCircle size="32" color={color} variant="Bold" />}
    </>
  );
};
