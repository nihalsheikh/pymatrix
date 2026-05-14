const Sidebar = () => {
  const navItems = ['Installation', 'Usage', 'Flags', 'Colors', 'Requirements'];
  
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-44">
        <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-8 opacity-80 font-bold">Reference Guide</h4>
        <nav className="flex flex-col gap-4">
          {navItems.map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-fg/70 hover:text-accent hover:pl-4 border-l border-transparent hover:border-accent transition-all font-bold py-1"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
