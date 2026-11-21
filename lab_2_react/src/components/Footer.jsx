import { useEffect, useState } from 'react';

function Footer({ name }) {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    // 1. Зчитуємо інформацію про операційну систему та браузер при монтуванні
    const systemData = {
      platform: navigator.platform || 'Невідома ОС',
      userAgent: navigator.userAgent,
    };

    // 2. Зберігаємо в localStorage у вигляді рядка (JSON.stringify)
    localStorage.setItem('reactSystemInfo', JSON.stringify(systemData));

    // 3. Зчитуємо дані назад із localStorage та парсимо у JS-об'єкт
    const rawSaved = localStorage.getItem('reactSystemInfo');
    if (rawSaved) {
      setSysInfo(JSON.parse(rawSaved));
    }
  }, []);

  return (
    <footer className="mt-8 bg-slate-700 px-4 py-6 text-center text-sm text-slate-200 dark:bg-slate-950">
      <p>&copy; 2026 {name}. Резюме створено в рамках лабораторної роботи №4.</p>

      {sysInfo && (
        <div className="mx-auto mt-3 max-w-4xl border-t border-slate-500/40 pt-3 text-xs text-slate-300">
          <p>
            <span className="font-semibold text-sky-300">Платформа (ОС): </span>
            {sysInfo.platform}
          </p>
          <p className="mt-1 break-all">
            <span className="font-semibold text-sky-300">Браузер (User-Agent): </span>
            {sysInfo.userAgent}
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;