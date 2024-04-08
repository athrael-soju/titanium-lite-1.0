import { useState } from 'react';
interface UseCustomInputProps {
  onSendMessage: (message: string) => Promise<void>;
}

export const useCustomInput = ({ onSendMessage }: UseCustomInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const appendText = (text: string) => {
    setInputValue((prevValue) => `${prevValue} ${text}`.trim());
  };

  const handleSendClick = async () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return {
    inputValue,
    appendText,
    handleInputChange,
    handleSendClick
  };
};
