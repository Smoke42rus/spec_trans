const equipment = [
  { name: "Автокраны", range: "25–80 т", icon: "↗", detail: "Подъём и монтаж конструкций на строительных и промышленных объектах." },
  { name: "Самосвалы", range: "15–30 т", icon: "▰", detail: "Перевозка грунта, сыпучих материалов и строительных отходов." },
  { name: "Автовышки", range: "до 48 м", icon: "↑", detail: "Работы на высоте для монтажа, обслуживания и строительства." },
  { name: "КМУ", range: "5–7 т", icon: "⌁", detail: "Погрузка, перевозка и установка оборудования и материалов." },
  { name: "Рефрижераторы", range: "3 т", icon: "❄", detail: "Перевозка грузов с поддержанием заданного температурного режима." },
  { name: "Тралы", range: "60–80 т", icon: "⇢", detail: "Переброска крупногабаритной техники и тяжёлых грузов." },
  { name: "Экскаваторы", range: "ковш 1–3 м³", icon: "⌕", detail: "Разработка грунта, котлованы и погрузка на строительных площадках." },
  { name: "Сваебойная техника", range: "по задаче", icon: "⌇", detail: "Погружение свай для строительных и инфраструктурных проектов." },
  { name: "Катки", range: "3–7 т", icon: "◉", detail: "Уплотнение грунта и дорожных покрытий." },
];

const steps = [
  ["01", "Заявка", "Позвоните или напишите — расскажите о задаче и площадке."],
  ["02", "Предварительный расчёт", "Уточним тип техники, сроки и условия подачи."],
  ["03", "Согласование и договор", "Зафиксируем стоимость, переброску и условия работ."],
  ["04", "Выполнение работ", "Предоставим технику с водителем или оператором в согласованный срок."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="header">
        <a href="#top" className="logo" aria-label="ЮгСпецТранс — на главную">
          <span className="logo-mark">Ю</span>
          <span>ЮГ<span className="logo-light">СПЕЦТРАНС</span></span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#equipment">Техника</a><a href="#geography">География</a><a href="#process">Как работаем</a><a href="#safety">Безопасность</a><a href="#contacts">Контакты</a>
        </nav>
        <a href="#contacts" className="header-contact">Обсудить задачу <span>↗</span></a>
        <a href="#contacts" className="mobile-contact">Заявка ↗</a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow"><span className="status-dot" /> АРЕНДА СПЕЦТЕХНИКИ И АВТОТРАНСПОРТ</div>
          <h1>Техника<br />для <span>дела.</span></h1>
          <p className="hero-description">Предоставляем строительную и транспортную технику с водителем или оператором. Работаем по договору по всей России.</p>
          <div className="hero-actions"><a href="#equipment" className="button-primary">Подобрать технику <span>↗</span></a><a href="#process" className="button-secondary">Как строится работа ↓</a></div>
          <div className="hero-notes"><span>Собственный и партнёрский парк</span><span>Работаем с НДС</span><span>Для организаций и частных заказчиков</span></div>
        </div>
        <div className="hero-visual" role="img" aria-label="Строительная техника на площадке">
          <div className="visual-shade" /><div className="visual-label">ЮГСПЕЦТРАНС <span> / 01</span></div>
          <div className="visual-card"><span>ТЕХНИКА ДЛЯ ВАШЕГО ОБЪЕКТА</span><strong>Подберём решение под задачу и сроки</strong><a href="#equipment">Каталог техники ↗</a></div>
        </div>
      </section>

      <section className="ticker"><div>АВТОТРАНСПОРТ <span>✳</span> СПЕЦТЕХНИКА <span>✳</span> РАБОТА ПО ДОГОВОРУ <span>✳</span> ПО ВСЕЙ РОССИИ <span>✳</span></div></section>

      <section className="section equipment-section" id="equipment">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow">КАТАЛОГ / 01</div><h2>Техника под <span>вашу задачу</span></h2></div><p>Собственный и партнёрский парк. Уточним доступность, сроки и стоимость подачи при обращении.</p></div>
        <div className="equipment-grid">
          {equipment.map((item, index) => <article className="equipment-card" key={item.name}>
            <div className={`equipment-image equipment-image-${index + 1}`}><span className="equipment-icon">{item.icon}</span><span className="equipment-number">{String(index + 1).padStart(2, "0")}</span></div>
            <div className="equipment-info"><div className="equipment-title"><h3>{item.name}</h3><span>{item.range}</span></div><p>{item.detail}</p><a href="#contacts" className="card-link">Запросить расчёт <span>↗</span></a></div>
          </article>)}
        </div>
        <p className="catalog-note">Наличие и характеристики конкретной машины подтверждаются при согласовании заявки.</p>
      </section>

      <section className="geography-section" id="geography">
        <div className="geography-copy"><div className="eyebrow">ГЕОГРАФИЯ / 02</div><h2>Работаем<br /><span>по всей России</span></h2><p>Приоритетное направление — Краснодарский край и прибрежные регионы. Подачу техники и стоимость переброски согласуем с заказчиком и фиксируем в договоре.</p><a href="#contacts" className="button-primary">Уточнить подачу <span>↗</span></a></div>
        <div className="geography-image" role="img" aria-label="Грузовой транспорт на дороге"><span>КРАСНОДАРСКИЙ КРАЙ · ПРИБРЕЖНЫЕ РЕГИОНЫ · РОССИЯ</span></div>
      </section>

      <section className="section process-section" id="process">
        <div className="eyebrow dark-eyebrow">ПОНЯТНЫЙ ПОРЯДОК / 03</div><h2>От заявки до <span>работы на объекте</span></h2>
        <div className="steps-grid">{steps.map(([number, title, description]) => <article className="step-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="safety-section" id="safety">
        <div className="safety-image" role="img" aria-label="Специалист в каске на строительной площадке"><span>ОТВЕТСТВЕННЫЙ ПОДХОД НА КАЖДОМ ЭТАПЕ</span></div>
        <div className="safety-content"><div className="eyebrow">БЕЗОПАСНОСТЬ / 04</div><h2>Работы с вниманием<br />к <span>требованиям</span></h2><p>Учитываем требования охраны труда и профессиональной безопасности при подготовке и выполнении работ.</p><ul><li>Согласуем условия и требования объекта заранее</li><li>Работаем на основании договора</li><li>Техника предоставляется с водителем или оператором</li><li>Поддерживаем надёжные партнёрские отношения</li></ul></div>
      </section>

      <section className="cta-section" id="contacts"><div className="eyebrow">ОБСУДИМ ВАШУ ЗАДАЧУ / 05</div><h2>Нужна техника<br /><span>на объекте?</span></h2><p>Свяжитесь с нами для предварительного расчёта. Согласуем сроки, условия подачи и стоимость.</p><div className="contact-actions"><a href="tel:+78005550199" className="button-primary">+7 (800) 555-01-99 <span>↗</span></a><a href="mailto:request@yugspectrans.example" className="contact-email">request@yugspectrans.example</a></div><div className="test-label">Тестовые контактные данные — будут заменены перед запуском сайта</div></section>

      <footer className="footer"><a href="#top" className="logo"><span className="logo-mark">Ю</span><span>ЮГ<span className="logo-light">СПЕЦТРАНС</span></span></a><span>© 2026 ЮгСпецТранс</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
