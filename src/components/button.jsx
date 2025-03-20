const Button = ({ value, bg_colour, text_size, font_type, text_colour }) => {
  return (
    <button
      className={`${bg_colour} text-${text_size} text-${text_colour} font-${font_type} border rounded-md outline-none border-gray px-4 py-1`}
    >
      {value}
    </button>
  );
};
export default Button;
