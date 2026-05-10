const config = {
  title: "ISSAM KHABOUCHI | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Issam Khabouchi, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including real estate platforms, Laravel applications, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Issam Khabouchi, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "ISSAM KHABOUCHI",
    "portfolio",
    "full-stack developer",
    "web development",
    "3D animations",
    "interactive websites",
    "Laravel",
    "WordPress",
    "React",
    "Next.js",
    "GSAP",
    "Framer Motion",
  ],
  author: "ISSAM KHABOUCHI",
  email: "",
  site: "",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "",
  },
};
export { config };
