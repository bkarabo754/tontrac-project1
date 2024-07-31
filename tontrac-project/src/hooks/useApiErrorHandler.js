import { useToast } from "../lib/use-toast";

const useApiErrorHandler = () => {
  const { toast } = useToast();

  const handleApiError = (error, operation) => {
    console.error(`Error ${operation}:`, error);
    toast({
      variant: "destructive",
      title: `Error ${operation}`,
      description: `There was a problem ${operation.toLowerCase()} the post details.`,
      className: "bg-destructive text-text",
    });
  };

  return handleApiError;
};

export default useApiErrorHandler;
