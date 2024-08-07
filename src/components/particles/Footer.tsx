import pkg from '../../../package.json';

export default function Footer() {
  return (
    <footer className="min-h-34 bg-car flex w-screen items-center justify-between px-4 py-3 text-[#1e1e1e]">
      <div className="lg:text-md font-geistMono flex h-full flex-col items-start justify-between text-left text-sm">
        <span className="text-accent-foreground">Contacto</span>
        <a
          className="text-xs text-accent-foreground hover:text-blue-400 lg:text-sm"
          href="https://chat.whatsapp.com/CmAJU7sIzYJ1ixZaNCQuYF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grupo de Whatsapp
        </a>
        <a
          className="text-xs text-accent-foreground hover:text-blue-400 lg:text-sm"
          href="mailto:neurosenseart@gmail.com?subject=Hay que conectar!"
        >
          neurosenseart@gmail.com
        </a>
      </div>
      <div className="flex h-14 flex-col items-end justify-end">
        <a
          href=""
          className="lg:text-md font-geistMono flex items-end justify-end text-sm text-accent-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          NARt© 2024
        </a>
        <a
          href="#"
          className="font-geistMono flex items-end justify-end text-xs text-accent-foreground lg:text-sm"
        >
          Version {pkg.version}
        </a>
      </div>
    </footer>
  );
}
