export function Button({ children, className }) {
  return (
    <button className={`px-4 py-2 text-white font-semibold rounded-xl shadow ${className}`}>
      {children}
    </button>
  );
}
