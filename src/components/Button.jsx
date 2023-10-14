function Button({ children, onClick, type, isActiveTag }) {
  const style = {
    primary: `rounded-full border-[1px] 
    ${isActiveTag ? "border-yellow-400" : "border-slate-200"} ${
      isActiveTag ? "text-yellow-400" : ""
    } px-4 py-1.5 hover:border-slate-600  focus:border-yellow-300 focus:text-yellow-300 active:border-yellow-300 active:text-yellow-300`,
    projects: `${isActiveTag ? "border-yellow-400" : "border-slate-200"} ${
      isActiveTag ? "text-yellow-400" : ""
    } text-slate-500 text-sm mt-10 px-3 py-1 border-2 border-slate-500 shadow-sm shadow-slate-900 hover:border-yellow-400 hover:text-slate-200`,
  };

  return (
    <button onClick={onClick} className={style[type]}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: "primary",
};

export default Button;
