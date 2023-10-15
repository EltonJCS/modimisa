import { proxy } from "valtio";

const randomColor = `hsl(${Math.random() * 360}, 100%, 50%, 1)`;

const state = proxy({
  intro: true,
  color: randomColor,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./EJCS-light-logo.png",
  fullDecal: "./EJCS-light-logo.png",
});

export default state;
