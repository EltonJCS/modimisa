import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#07060D",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./EJCS-light-logo.png",
  fullDecal: "./EJCS-light-logo.png",
});

export default state;
