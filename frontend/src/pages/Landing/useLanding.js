import { useState } from "react";

export const useLanding = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [titleHovered, setTitleHovered] = useState(false);

  return { buttonHovered, setButtonHovered, titleHovered, setTitleHovered };
};
