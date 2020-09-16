import React, { FunctionComponent } from "react";
import Typewriter from "typewriter-effect";

import { AiCommandTypes } from "~/store/types/commandTypes";
import { SetProjectWindow } from "~/store/actions";

import "./AI.scss";

const AI: FunctionComponent<AIProps> = ({ command }: AIProps) => {
  const className = "ai";

  if (command === "Show me his projects.") {
    setTimeout(() => SetProjectWindow(true), 4000);
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
                "I am an artificial inteligence machine mc49 created based on fron-end developer Mindaugas Cesna.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "What's your purpose?":
        return (
          <Typewriter
            options={{
              strings:
                "My sole purpose of existence is to represent experiances, skills and projects of my creator.",
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
      case "Tell me about your creators experiances.":
        return (
          <Typewriter
            options={{
              strings:
                "Currently my creators work experiance is freelancing as front-end developer and simultaneously working with various personal and collaboration projects for nearly an year.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "Show me his projects.":
        return (
          <Typewriter
            options={{
              strings: "Sure, which one you would like to see?",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case 'What kind of skills does he posses?':
        return (
          <Typewriter
            options={{
              strings: "As for now, my creator mainly uses TypeScript, React and Sass for web-development.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "How about a match of chess?":
        return (
          <Typewriter
            options={{
              strings: "I'm sorry this command is currently disabled for your own safety.",
              autoStart: true,
              delay: 50,
            }}
          />
        );
      case "I would like to contact your creator.":
        return (
          <Typewriter
            options={{
              strings: "You can find his social media links at the bottom-right corner.",
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
