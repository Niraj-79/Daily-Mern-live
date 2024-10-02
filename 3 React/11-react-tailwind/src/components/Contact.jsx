import { Globe } from "lucide-react";
import Section from "./Section";
import { Linkedin } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: <Linkedin />, title: "Linkedin", url: "https://in.linkedin.com/" },
    {
      icon: <Github />,
      title: "Github",
      url: "https://github.com/Niraj-79/Home-Daily-Mern-live",
    },
    { icon: <Twitter />, title: "Twitter", url: "https://x.com/?lang=en" },
  ];

  return (
    <div className="pb-6">
      <Section icon={<Globe />} sectionTitle={"Contact & Social Media"}>
        <p className=" text-gray-700 mb-4 ">
          Email: nirajkumar50078@gmail.com <br />
          Phone: +91 6206458363
        </p>

        {socialLinks.map((social) => (
          <SocialMedia
            icon={social.icon}
            title={social.title}
            key={social.title}
            url={social.url}
          />
        ))}
      </Section>
    </div>
  );
};

export default Contact;
