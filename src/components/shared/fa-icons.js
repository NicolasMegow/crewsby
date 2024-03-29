import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FaCheck = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "check"]}
        color="#FDE050"
        size="lg"
        mask={["fas", "circle"]}
        transform="shrink-8"
      />
    </>
  );
};

export const FaSuccess = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "check"]}
        fixedWidth
        color="#FDE050"
        size="2x"
        style={{ margin: ".5rem" }}
      />
    </>
  );
};

export const FaError = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "times"]}
        fixedWidth
        color="#FDE050"
        size="2x"
        style={{ margin: ".5rem" }}
      />
    </>
  );
};

export const FaAR = () => {
  return (
    <>
      <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} fixedWidth />
    </>
  );
};
export const FaAL = () => {
  return (
    <>
      <FontAwesomeIcon icon={["fas", "long-arrow-alt-left"]} fixedWidth />
    </>
  );
};

export const FaMask = ({ icon }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", icon]}
        mask={["fas", "circle"]}
        size="lg"
        transform="shrink-8"
        color="#FDE050"
      />
    </>
  );
};

export const FaLoading = () => {
  return (
    <FontAwesomeIcon
      icon={["fad", "spinner"]}
      color="#FDE050"
      size="3x"
      pulse
    />
  );
};

export const FaChecked = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "checkmark"]}
        mask={["fas", "circle"]}
        transform="shrink-8"
        color="#FDE050"
      />
    </>
  );
};

export const FaToDo = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={["fas", "question"]}
        mask={["fas", "circle"]}
        size="lg"
        transform="shrink-8"
        color="#FDE050"
      />
    </>
  );
};
