import { DirectorProps } from "../components/about/director";
import { ClientProps } from "../components/index/client";
import nikita from "./images/avatars/avatar-nikita.jpg";
import cristian from "./images/avatars/avatar-christian.jpg";
import cruz from "./images/avatars/avatar-cruz.jpg";
import drake from "./images/avatars/avatar-drake.jpg";
import griffin from "./images/avatars/avatar-griffin.jpg";
import aden from "./images/avatars/avatar-aden.jpg";
import aiysha from "./images/avatars/avatar-aiysha.jpg";
import arthur from "./images/avatars/avatar-arthur.jpg";
import kady from "./images/avatars/avatar-kady.jpg";

export const directors:DirectorProps[] = [
  {
    name: `Nikita Marks`,
    title: `Founder & CEO`,
    avatar: nikita,
    quote: `It always amazes me how much talent there is in every corner of the globe.`,
    twitter: `https://twitter.com/`,
    linkedin: `https://linkedin.com/in/arynn-boniface`,
  },
  {
    name: `Cristian Duncan`,
    title: `Co-founder & COO`,
    avatar: cristian,
    quote: `Distributed teams required unique processes. You need to approach work in a new way.`,
    twitter: `https://twitter.com/`,
    linkedin: `https://linkedin.com/in/arynn-boniface`,
  },
  {
    name: `Cruz Hamer`,
    title: `Co-founder & CTO`,
    avatar: cruz,
    quote: `Technology is at the forefront of enabling distributed teams. That's where we come in.`,
    twitter: `https://twitter.com/`,
    linkedin: `https://linkedin.com/in/arynn-boniface`,
  },
  {
    name: `Drake Heaton`,
    title: `Business Development Lead`,
    avatar: drake,
    quote: `Hiring similar people from similar backgrounds is a surefire way to stunt innovation.`,
    twitter: `https://twitter.com/`,
    linkedin: `https://linkedin.com/in/arynn-boniface`,
  },
  {
    name: `Griffin Wise`,
    title: `Lead Marketing`,
    avatar: griffin,
    quote: `Unique perspectives shape unique products, which is what you need to survive these days.`,
    twitter: `https://twitter.com/`,
    linkedin: `https://linkedin.com/in/arynn-boniface`,
  },
  {
    name: `Aden Allen`,
    title: `Head of Talent`,
    avatar: aden,
    quote: `Empowered teams create truly amazing products. Set the north star and let them follow it.`,
    twitter: `https://twitter.com/`,
    linkedin: `https://linkedin.com/in/arynn-boniface`,
  },
];

export const clients:ClientProps[] = [
  {
    name: `Kady Baker`,
    title: `Product Manager at Bookmark`,
    quote: `The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months 
    faster than planned.`,
    avatar: kady,
  },
  {
    name: `Aiysha Reese`,
    title: `Founder of Manage`,
    quote: `We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone 
    through the roof!`,
    avatar: aiysha,
  },
  {
    name: `Arthur Clarke`,
    title: `Co-founder of MyPhysio`,
    quote: `Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the 
    first month.`,
    avatar: arthur,
  },
];