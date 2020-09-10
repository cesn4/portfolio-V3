import React, { FunctionComponent } from "react";
import Typewriter from "typewriter-effect";

import { AiCommandTypes } from "~/store/types/commandTypes";
import { SetProjectWindow, SetAiCommand } from "~/store/actions";

import "./AI.scss";

const AI: FunctionComponent<AIProps> = ({ command }: AIProps) => {
  const className = "ai";

  if (command === "Show me your works.") {
    setTimeout(() => SetAiCommand('Find Projects'), 6000)
    setTimeout(() => SetProjectWindow(true), 8500)
  }

  const aiCall: Function = (command: AiCommandTypes) => {
    switch (command) {
      case "Good morning":
        return (
          <Typewriter
            options={{
              strings: "Hello there, how can I help you?",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "Who are you?":
        return (
          <Typewriter
            options={{
              strings:
                " I am an artificial inteligence machine mc49 created based on fron-end developer Mindaugas Cesna.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "Why do you exist?":
        return (
          <Typewriter
            options={{
              strings:
                "Well... my sole purpose of existence is to represent experiance, works, skills and mindset it self of my creator.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "Who created you?":
        return (
          <Typewriter
            options={{
              strings:
                "For perfect synchronisation I was created by Mindaugas Cesna himself.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "Tell me about your experiances.":
        return (
          <Typewriter
            options={{
              strings:
                "Currently my work experiance is as a freelance front-end developer working with various personal projects and contributing to colegues works.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "Show me your works.":
        return (
          <Typewriter
            options={{
              strings:
                "Sure, just give me a second to collect them...",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case 'Find Projects':
        return (
          <Typewriter
            options={{
              strings:
                "Alright, here they are.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      default:
        return "";
    }
  };
  return <div className={className}>{aiCall(command)}</div>;
};

export interface AIProps {
  command: AiCommandTypes;
}

export default AI;
