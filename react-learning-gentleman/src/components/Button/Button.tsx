import "./Button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}
// Creamos un evento que enviamos al padre (App)
export const Button = ({ label, parentMethod }: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
};
