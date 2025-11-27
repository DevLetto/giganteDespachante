function BackButton(props) {
  return (
    <button
      {...props}
      className="text-traco hover:bg-traco hover:text-white rounded-lg transition hover:cursor-pointer"
    >
      {props.children}
    </button>
  );
}

export default BackButton;
