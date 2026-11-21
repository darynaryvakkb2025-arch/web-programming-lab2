import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const variantNumber = 19;
    const url = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;

    async function fetchComments() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Помилка запиту: ${response.status}`);
        }

        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error('Помилка завантаження коментарів:', err);
        setError('Не вдалося завантажити коментарі із сервера.');
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, []);

  return (
    <section
      id="reviews"
      className="mx-auto mt-8 max-w-5xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-sky-400">
        Коментарі попередніх роботодавців
      </h2>

      {loading && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Завантаження коментарів...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-lg border border-slate-200 border-l-4 border-l-sky-600 bg-slate-50 p-4 dark:border-slate-700 dark:border-l-sky-400 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {comment.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-sky-700 break-all dark:text-sky-400">
                Email: {comment.email}
              </p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;