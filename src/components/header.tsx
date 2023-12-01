function Header() {
  return (
    <div className='fixed top-0 left-0 w-full h-[--header-height] bg-slate-600 bg-opacity-30 backdrop-blur flex items-center px-8 justify-between'>
      <a href='/' className='h-full flex items-center p-10 hover:text-white'>
        <h1 className='uppercase'>home</h1>
      </a>
      <nav>
        <ul className='flex space-x-4 font-bold text-xl'>
          <li>
            <a href='#about' className='hover:text-white'>
              About
            </a>
          </li>
          <li>
            <a href='#skill' className='hover:text-white'>
              Skill
            </a>
          </li>
          <li>
            <a href='#craft' className='hover:text-white'>
              craft
            </a>
          </li>
          <li>
            <a href='#comment' className='hover:text-white'>
              comment
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-white'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
