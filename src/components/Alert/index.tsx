import Alert from "react-bootstrap/Alert";

interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  dismissible?: string;
  message: string;
  open?: () => void;
  onClose?: () => void;
  show?: boolean;
}

export const Message: React.FC<AlertProps> = ({
  dismissible,
  message,
  variant,
  open,
  show,
  onClick,
  onClose,
}): JSX.Element => {
  return (
    <Alert
      style={{ width: "100%" }}
      variant={variant}
      show={show}
      onClick={onClick}
      onClose={onClose}
      //   onClose={()=> error== null}
    >
      {message}
    </Alert>
  );
};
