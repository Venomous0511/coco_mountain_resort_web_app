export default function InputField({ id, label, type, required, inputMode }) {
  return (
    <>
      <div>
        <label htmlFor={id} className="relative block">
          <input
            type={type}
            id={id}
            className="peer w-full border-x-0 border-t-0 border-b-2 border-gray-900 dark:border-gray-100 focus:border-green-600 dark:focus:border-green-400 focus:ring-0 focus:ring-b-2 focus:ring-green-600 dark:focus:ring-green-400 bg-transparent placeholder-transparent focus:outline-none"
            placeholder={label}
            required={required}
            inputMode={inputMode}
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs text-gray-700 dark:text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            {label} <span className="text-xs">{"(required)"}</span>
          </span>
        </label>
      </div>
    </>
  );
}