import { Button } from "@/components/ui/button";

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel, confirmText = "Yes", cancelText = "No" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background-light bg-opacity-50 z-50">
      <div className="bg-background p-16 rounded-lg shadow-lg border">
        <p className="mb-2 text-text font-semibold">{message}</p>
        <div className="flex justify-end mt-6">
          <Button
            onClick={onConfirm}
            className="mr-2 bg-destructive text-white"
            style={{ backgroundColor: "red", border: "none" }}
          >
            {confirmText}
          </Button>
          <Button
            onClick={onCancel}
            className="bg-background border text-text hover:bg-background"
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
