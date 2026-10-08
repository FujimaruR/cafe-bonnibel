import { useLocale as useSiteLocale, money as formatMoney, t as tr, text as localizeText } from '../site/locale';
import menu from '../data/menu.json';


export default function MenuGrid() {
  useSiteLocale();
    return (
        <section id="menu" className="py-16 md:py-20 bg-beige">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="font-serif text-3xl md:text-4xl text-cafe mb-8">{tr("text.c7c06e9fff")}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {menu.sections.map((sec) => (
                        <div key={sec.title} className="bg-crema rounded-2xl p-5 border border-beige/70 shadow-sm">
                            <h3 className="font-serif text-2xl text-cafe mb-4">{localizeText(sec.title)}</h3>
                            <ul className="space-y-3">
                                {sec.items.map((it) => (
                                    <li key={it.name} className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-cafe font-medium">{localizeText(it.name)}</p>
                                            <p className="text-sm text-cafe/70">{localizeText(it.desc)}</p>
                                        </div>
                                        <span className="text-cafe/80 font-semibold">{formatMoney(it.price)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
