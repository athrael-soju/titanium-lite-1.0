import { useForm } from 'react-hook-form';

interface ChatFormValues {
  name: string;
  description: string;
  transcript: string;
  isLoading: boolean;
}

export const useChatForm = () => {
  const formMethods = useForm<ChatFormValues>({
    defaultValues: {
      name: '',
      description: '',
      transcript: '',
      isLoading: false
    },
  });

  return formMethods;
};
