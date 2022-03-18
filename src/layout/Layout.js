import { Fragment, useEffect, useState } from "react";
import CopyRight from "../components/CopyRight";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  fatchData,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "../utilits";
import Cursor from "./Cursor";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import PreLoader from "./PreLoader";
import Progressbar from "./Progressbar";

const Layout = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState({});
  useEffect(async () => {
    setSiteInfo(await fatchData("/static/siteSetting.json"));
  }, []);
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);
  }, []);
  return (
    <Fragment>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu
          logo={siteInfo && siteInfo.logo && siteInfo.logo["light"]}
        />
        <Header logo={siteInfo && siteInfo.logo && siteInfo.logo["light"]} />
        {children}
        <CopyRight brandName={siteInfo && siteInfo.brandName} />
        <Cursor />
        <Progressbar />
      </div>
    </Fragment>
  );
};
export default Layout;
