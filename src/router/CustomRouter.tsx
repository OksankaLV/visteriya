import { HashRouter, BrowserRouter } from "react-router-dom";

const isGithubPages = window.location.hostname.includes("github.io");
const basename = "/visteriya";

export const CustomRouter = ({ children }: { children: React.ReactNode }) => {
  return isGithubPages ? (
    <HashRouter>{children}</HashRouter>
  ) : (
    <BrowserRouter basename={basename}>{children}</BrowserRouter>
  );
};
