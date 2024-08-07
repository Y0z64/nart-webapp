import pkg from '../../../package.json';

export default function Footer() {
  return (
    <footer className="min-h-34 flex w-screen items-center justify-between bg-car px-4 py-3 text-[#1e1e1e]">
      <div className="lg:text-md font-geistMono flex h-full flex-col items-start justify-between text-left text-sm">
        <span className='text-accent-foreground'>Contacto</span>
        <a
          className="text-xs text-accent-foreground hover:text-blue-400 lg:text-sm"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          www.placeholder.com
        </a>
        <a
          className="text-xs text-accent-foreground hover:text-blue-400 lg:text-sm"
          href="mailto:yairprogrammer@gmail.com?subject=Let's%20Connect!"
        >
          placeholder@plaholder.com
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
