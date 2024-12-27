import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const links = [
    {
      icon: SiGithub,
      href: "https://github.com/SamPink",
      label: "GitHub"
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/sampink/",
      label: "LinkedIn"
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/spinketh",
      label: "X (Twitter)"
    }
  ];

  return (
    <div className="flex justify-center gap-6 mt-8">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ff00]/80 hover:text-[#00ff00] transition-colors"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}