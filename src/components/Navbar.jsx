import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { useEffect, useState } from 'react';
import config from '../data/config.json';


export default function Navbar() {
  useSiteLocale();
    const [open, setOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);
    useEffect(() => {
        const onScroll = () => setIsTop(window.scrollY < 12);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const waNumber = config.cta.whatsapp.replace(/\s|\+/g, '');
    const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(localizeText(config.cta.waMessage))}`;


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isTop ? 'bg-transparent' : 'bg-crema/90 backdrop-blur border-b border-beige/60'}`}>
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="#" className="font-serif text-2xl tracking-wide text-cafe whitespace-nowrap">
                    {localizeText(config.brand)}
                </a>
                <button className="md:hidden px-3 py-2 border rounded-lg" aria-expanded={open} aria-controls="basic-navigation" aria-label={tr('ui.navigation')} onClick={() => setOpen(!open)}>☰</button>
                <div id="basic-navigation" onClick={() => setOpen(false)} className={`${open ? 'flex' : 'hidden'} md:flex absolute top-full left-0 right-0 p-4 bg-crema md:static md:p-0 md:bg-transparent flex-wrap items-center gap-3 text-cafe/80`}>
                    <a href="#menu" className="hover:text-cafe">{tr("text.17ea0a188c")}</a>
                    <a href="#ubicacion" className="hover:text-cafe">{tr("text.7af1ffcca6")}</a>
                    <a href="#contacto" className="hover:text-cafe">{tr("text.d8a53e1f6d")}</a>
                    <a href={waHref} target="_blank" className="px-4 py-2 rounded-xl bg-cafe text-crema hover:opacity-95">{tr("text.65748a7f83")}</a>
                </div>
            </nav>
        </header>
    );
}
