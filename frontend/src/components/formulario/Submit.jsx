export const Submit = ({onClose}) => {
  
  return (
    <>
      <input
        type="submit"
        value="Agregar"
        className="w-50 py-1 px-5 rounded-md text-cv-primary bg-white border-2 border-cv-primary hover:text-white hover:bg-cv-primary flex items-center justify-center text-l font-semibold uppercase active:scale-95 ease-in-out duration-300 cursor-pointer"
        onClick={() => { onClose(); }}
      />
    </>
  );
};
