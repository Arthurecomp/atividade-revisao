import { FormEventHandler } from "react";

interface PropsButton {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  showMovie?: () => void;

  deleteMovie?: () => void;
}

export function Button({
  type,
  children,
  showMovie,
  deleteMovie,
}: PropsButton) {
  return (
    <button
      className="text-sm h-8 bg-cyan-600 rounded-mg"
      type={type}
      onClick={showMovie || deleteMovie}
    >
      {children}
    </button>
  );
}
