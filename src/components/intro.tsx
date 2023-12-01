function Intro() {
  return (
    <section id='about' className='h-[550px] bg-[--main-section-connect-color]'>
      <div className='h-full flex flex-col justify-center p-4 text-center sm:mx-32  '>
        <h1 className='p-2 tracking-tight'>
          Hello, I am The Front-End Developer..
        </h1>
        <p className='p-6 text-xl tracking-wide '>
          I liked to learn something new! I am not computer-science bachelor,
          but really interested in building Web-App. Powered by Javascript,
          Typescript, React and Tailwindcss..
        </p>
        <div>
          <button
            className='bg-slate-700 p-4 rounded-md hover:bg-slate-600 hover:text-white font-bold'
            onClick={() => alert("연락주세요~~")}
          >
            contact me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
