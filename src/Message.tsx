import React from "react";

interface MessageProps {
  txt: string;
  styleProps?: string;
}

function Message({ txt, styleProps }: MessageProps) {
  return (
    <div className={`${styleProps ? styleProps : null} messageDefault`}>
      {txt}
    </div>
  );
}

export default Message;
