import smartIncubator from "../assets/projects/smart-incubator.jpg";
import webKKN from "../assets/projects/web-kkn.png";
import kado from "../assets/projects/kado.png";

export const HERO_CONTENT = `I am an IT-Operations who loves to automate things and make life easier for everyone, wether it's a simple bash script or a complex CI/CD pipeline, I am always looking for ways to improve and optimize the way we work.`;
export const ABOUT_TEXT = `I am a passionate IT-Operations Engineer with experience in monitoring, troubleshooting, and maintaining applications. I have a strong background in Linux, Databases, Python, Ansible, Docker, and Grafana. I also love IoT, as my final college project is a smart egg incubator using nodeMCU. I love learning new things and would really appreciate if opportunities are given to me . Because I believe everything can be learned when given time and effort.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Operations Engineer",
    company: "BRI",
    description: `Our team is responsible to handle some BRI Application, two of which super apps (BRILINK & BRISPOT) that are used by millions of users. The other application is BRISURF and BRIGUNA DIGITAL. We are responsible to monitor, troubleshoot, deploy, and maintain the application.`,
    technologies: ["Linux", "Databases", "Python", "Ansible", "Docker", "OpenShift", "Grafana"],
  },
  {
    year: "2019 - 2021",
    role: "Lab Computer Assistant",
    company: "Sebelas Maret University",
    description: `Maintained and managed the computer lab, including troubleshooting hardware and software issues, installing updates, and providing technical support to students and faculty.`,
    technologies: ["Hardware", "Software", "Networking"],
  },
  {
    year: "2020 - 2020",
    role: "Intern Odoo Developer",
    company: "Cendana Teknika Utama",
    description: `Designed and developed applications using Odoo. We create restaurant management system which include POS, Menu Management, and Order Management, which stremline the order system between the waiter and the kitchen.`,
    technologies: ["Odoo", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Portal BTO",
    image: smartIncubator,
    description:
      "Dashboard for BTO team to  make life easier. We use it for presence, handover, and store a lot of ip server and the credential, patching, and many more. We use React, flask, mysql, and redis for this project. The project is deployed using docker and OKD.",
    technologies: ["React", "Flask", "MySQL", "Redis", "Docker", "OKD"],
  },
  {
    title: "Smart Egg Incubator",
    image: smartIncubator,
    description:
      "A smart egg incubator that monitors temperature, humidity, and egg turning which sends real-time alerts to the user's phone. The system is built base on fuzzy logic using Node MCU, DHT22, and a servo motor. I use Thingspeak for data collection and for alerting I use Telegram Bot.",
    technologies: ["Arduino", "C++", "Thingspeak", "Telegram Bot"],
  },
  {
    title: "KKN Website",
    image: webKKN,
    description:
      "A website for KKN program that post activities, news, and information about the program. The website also provide list of all UMKM in the area and their contact information.",
    technologies: ["Laravel", "HTML", "Laravel", "MySQL"],
  },
  {
    title: "KaDo (Kawan Dompet)",
    image: kado,
    description:
      "A budgeting app that helps users track their expenses, set financial goals, and visualize their spending habits. The app is created using flutter as a class project.",
    technologies: ["Flutter", "Dart", "Hive"] 
  },
];

export const CONTACT = {
  phoneNo: "+6289672286014",
  email: "azizdafaputra@gmail.com",
};
