// Async function that call the json data and revalidate every it refresh
async function getFaqs() {
  const res = await fetch("http://localhost:4000/faqs", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

export default async function FaqsList() {
  // Calling the getFaqsList
  const faqs = await getFaqs();

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className={`group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900`}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              {faq.question}
            </h2>
            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
