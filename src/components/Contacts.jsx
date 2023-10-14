function Contacts() {
  return (
    <div className="h-[90vh] w-[90vw] bg-slate-200 p-10 md:w-[40vw] ">
      <form
        method="POST"
        action="https://getform.io/f/67329d5b-5443-4f84-9c01-7f5ed7397e14"
        className="flex w-full max-w-[600px] flex-col"
      >
        <div className="pb-4">
          <p className="inline border-b-4 border-yellow-400 text-4xl font-bold text-slate-900">
            Contact
          </p>
          <p className="py-4 text-slate-900">
            {
              "Submit the form below or send me an email at - victorlemuelrait@gmail.com"
            }
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          placeholder="Name"
          name="name"
          type="text"
        />
        <input
          className="my-4 bg-[#ccd6f6] p-2"
          placeholder="Email"
          name="email"
          type="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button className="m-auto mt-[1rem] flex items-center border-2 border-slate-400 px-4 py-3 text-slate-900 hover:border-yellow-400 hover:bg-yellow-400">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contacts;
