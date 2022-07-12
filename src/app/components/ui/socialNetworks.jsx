import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";
import {SiTelegram} from "@react-icons/all-files/si/SiTelegram";
import {AiFillFacebook} from "@react-icons/all-files/ai/AiFillFacebook";
import {AiOutlineGithub} from "@react-icons/all-files/ai/AiOutlineGithub";
import {FiLinkedin} from "@react-icons/all-files/fi/FiLinkedin";
import {FaHeading} from "@react-icons/all-files/fa/FaHeading";

const SocialNetworks = ({socialNetworks}) => {
  return (
    <>
      <NavLink
        className="navLinkStyle"
        target={"_blank"}
        to={{pathname: `${socialNetworks.instagram}`}}
      >
        <AiFillInstagram/>
      </NavLink>
      <NavLink
        className="navLinkStyle"
        target={"_blank"}
        to={{pathname: `${socialNetworks.telegram}`}}
      >
        <SiTelegram/>
      </NavLink>
      <NavLink
        className="navLinkStyle"
        target={"_blank"}
        to={{pathname: `${socialNetworks.facebook}`}}
      >
        <AiFillFacebook/>
      </NavLink>
      <NavLink
        className="navLinkStyle"
        target={"_blank"}
        to={{pathname: `${socialNetworks.github}`}}
      >
        <AiOutlineGithub/>
      </NavLink>
      <NavLink
        className="navLinkStyle"
        target={"_blank"}
        to={{pathname: `${socialNetworks.linkedin}`}}
      >
        <FiLinkedin/>
      </NavLink>
      <NavLink
        className="navLinkStyle"
        target={"_blank"}
        to={{pathname: `${socialNetworks.headhunter}`}}
      >
        <FaHeading/>
      </NavLink>
    </>
  );
};

SocialNetworks.prototype = {
  socialNetworks: PropTypes.array
};

export default SocialNetworks;
