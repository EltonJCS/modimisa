import { proxy } from "valtio";

const randomColor = `hsl(${Math.random() * 360}, 100%, 50%, 1)`;

const state = proxy({
  intro: true,
  color: randomColor,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./EJCS-light-logo.svg",
  fullDecal: "./EJCS-light-logo.svg",
});

export default state;
