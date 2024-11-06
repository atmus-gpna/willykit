/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
// Added the ability to import local fonts as modules
declare module "*.otf";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";

declare module "*.pdf";
declare module "*.gif";
declare module "*.svg";
declare module "*.svg?react";
declare module "*.svg" {
  const content: string;
  export default content;
}
