interface Props {
  onClick:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void);
  label: string;
  value?: string | number;
  name?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ label, onClick, type, name, value }: Props) => {
  return (
    <button
      type={type}
      name={name}
      value={value}
      onClick={onClick}
      className=" border-slate-500 hover:bg-slate-600/80 transition-all p-2 bg-slate-600"
    >
      {label}
    </button>
  );
};

export default Button;
