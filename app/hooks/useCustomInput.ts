import { useState } from 'react';
interface UseCustomInputProps {
  onSendMessage: (message: string) => Promise<void>;
}

export const useCustomInput = ({ onSendMessage }: UseCustomInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState({
    assistant: false,
    vision: false,
    speech: false,
    rag: false,
    memory: false,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDialog = (dialog: keyof typeof isDialogOpen) => {
    setIsDialogOpen((prev) => ({ ...prev, [dialog]: !prev[dialog] }));
    handleMenuClose();
  };

  return {
    inputValue,
    appendText,
    handleInputChange,
    handleSendClick,
    isDialogOpen,
    toggleDialog,
    handleMenuOpen,
    handleMenuClose,
    anchorEl,
  };
};
