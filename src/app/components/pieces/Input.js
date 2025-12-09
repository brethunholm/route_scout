import "./Input.scss";

export default function Input({ type = "text", ...props }) {
  return <input className="input" type={type} {...props} />;
}
