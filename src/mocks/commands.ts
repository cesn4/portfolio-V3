import { AiCommandTypes } from "~/store/types/commandTypes";

export const commandList: Array<CommandListContent> = [
    {
      title: "Existential",
      command: "Who are you?",
      command2: "Why do you exist?",
      command3: "Who created you?",
    },
    {
      title: "Portfolio",
      command: "Tell me about your experiances.",
      command2: "Show me your works.",
      command3: "What kind of skills do you posses?",
    },
    { title: "Games", command: "How about match of chess?" },
    { title: "Contact", command: "I would like to contact your creator." },
  ];

  export interface CommandListContent {
    title: string;
    command: AiCommandTypes;
    command2?: AiCommandTypes;
    command3?: AiCommandTypes;
  }