import _ from "lodash";
import "../css/styles.css";
import "../css/mediaque.css";
import profile from "../assets/profilepic.PNG";
import js from "../assets/js_img.svg";
import css from "../assets/css_img.svg";
import html from "../assets/html_img.svg";
import linux from "../assets/linux_img.svg";
import git from "../assets/git_img.svg";

const profilepic = document.getElementById("pro_image");
profilepic.src = profile;

const jsimg = document.getElementById("jsimg");
jsimg.src = js;

const csimg = document.getElementById("cssimg");
csimg.src = css;

const htmlimg = document.getElementById("htmlimg");
htmlimg.src = html;

const linux_img = document.getElementById("linux");
linux_img.src = linux;

const gitimg = document.getElementById("git");
gitimg.src = git;
