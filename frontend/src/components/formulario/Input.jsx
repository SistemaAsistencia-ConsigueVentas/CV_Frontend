const Input = ({
  filterShift,
  valor,
  actualizarValor,
  textoHolder,
  label,
  colorLetter,
}) => {
  const manejarEnvio = (e) => {
    return actualizarValor(e.target.value);
  };

  const placeholderValue =
    filterShift === "Selecciona" ? "Selecciona un departamento" : textoHolder;

  return (
    <>
      <label
        htmlFor="names"
        className={`block mb-1 font-medium ${colorLetter}`}
      >
        {label}
      </label>
      <input
        type="text"
        id="names"
        disabled={filterShift === "Selecciona"}
        className="w-full p-2  text-gray-900 rounded-md border-b-2 border-gray-300  bg-white drop-shadow-md outline-none sm:w-full sm:text-md placeholder-gray-500 font-semibold"
        placeholder={placeholderValue}
        value={valor}
        onChange={manejarEnvio}
      />
    </>
  );
};

export default Input;
