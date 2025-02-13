"use client";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export function LearnMoreButton() {
  return (
    <Button
      onClick={() => {
        const scrollSection = document.querySelector("#features");
        if (scrollSection) {
          scrollSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
      variant="solid"
      size="4"
      color="jade"
      style={{ cursor: "pointer" }}
    >
      <ArrowDownIcon />
      Learn more
    </Button>
  );
}
