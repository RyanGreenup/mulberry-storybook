import { JSXElement } from "solid-js";
import { css } from "../styled-system/css";

export const Button = (props: { children: JSXElement }) => {
  return (
    <button
      class={css({
        bg: "red.300",
        fontFamily: "Inter",
        px: "4",
        py: "3",
        borderRadius: "md",
        _hover: { bg: "red.400" },
      })}
    >
      {props.children}
    </button>
  );
};
