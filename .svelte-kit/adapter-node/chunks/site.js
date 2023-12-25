const bio = [
  "Probably napping",
  "Software Engineer!",
  "Learning Data Engineering!",
  "Reading",
  "Writing...",
  "Doing cool stuff"
];
const site = {
  protocol: {}.URARA_SITE_PROTOCOL ?? false ? "http://" : "https://",
  domain: {}.URARA_SITE_DOMAIN ?? "urara-demo.netlify.app",
  title: "Sadeeptha-B",
  subtitle: "Personal Portfolio and Blog",
  lang: "en-US",
  author: {
    avatar: "/assets/maskable@512.png",
    name: "Sadeeptha",
    status: "💻",
    bio: bio[~~(Math.random() * bio.length)],
    metadata: [
      {
        text: "GitHub",
        link: "https://github.com/Sadeeptha-B"
      }
    ]
  },
  themeColor: "#252732"
};
export {
  site as s
};
