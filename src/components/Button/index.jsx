import { Button } from "react-bootstrap";

export default function SButton({ children, action, variant, size, loading, disabled, className }) {
  return (
    <Button className={className} onClick={action} variant={variant} size={size} disabled={disabled}>
      {" "}
      {loading ? "Loading..." : children || ""}{" "}
    </Button>
  );
}


