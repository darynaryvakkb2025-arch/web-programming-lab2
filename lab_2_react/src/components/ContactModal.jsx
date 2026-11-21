import { useEffect, useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xnpdgapj';

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timerId);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('Надсилання...');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Повідомлення успішно надіслано!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const data = await response.json().catch(() => null);
        setStatus('error');
        setStatusMessage(
          data?.errors?.[0]?.message || 'Не вдалося надіслати повідомлення. Спробуйте ще раз.'
        );
      }
    } catch (err) {
      console.error('Помилка відправки форми:', err);
      setStatus('error');
      setStatusMessage('Помилка мережі під час надсилання форми.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Закрити вікно"
          className="absolute top-3 right-3 cursor-pointer rounded-lg px-2.5 py-1 text-lg font-bold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          &times;
        </button>

        <h2
          id="contact-modal-title"
          className="mb-4 text-xl font-bold text-slate-900 dark:text-sky-400"
        >
          Зворотний зв&apos;язок
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="react-modal-name"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Ім&apos;я
            </label>
            <input
              id="react-modal-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введіть ваше ім'я"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="react-modal-email"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email
            </label>
            <input
              id="react-modal-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="react-modal-phone"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Номер телефону
            </label>
            <input
              id="react-modal-phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+380..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="react-modal-message"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Повідомлення
            </label>
            <textarea
              id="react-modal-message"
              name="message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Напишіть ваше повідомлення..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full cursor-pointer rounded-lg bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Надсилання...' : 'Надіслати'}
          </button>

          {status !== 'idle' && (
            <p
              className={`text-sm font-medium ${
                status === 'success'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : status === 'error'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactModal;