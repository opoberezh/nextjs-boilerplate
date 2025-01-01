import * as React from "react";
import ChatBot from "react-simple-chatbot";

const ChatGame = () => {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Where am I from?',
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 1, label: 'Ukraine', trigger: '4' },
            { value: 2, label: 'Bulgaria', trigger: '3' },
            { value: 3, label: 'Poland', trigger: '3' },
          ],
        },
        {
          id: '3',
          message: 'Incorrect! Try again.',
          trigger: '2',
        },
        {
          id: '4',
          message: 'Correct! I am from Ukraine.',
        },
      ]}
    />
  );
};

export default ChatGame;
