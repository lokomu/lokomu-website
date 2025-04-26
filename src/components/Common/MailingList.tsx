export function MailingList() {
  return (
    <div className="flex flex-col gap-8 bg-gradient-to-br from-agreen-800 to-ablue-800 py-14 text-center sm:py-20">
      <h2 className="text-3xl font-bold text-white">We're still brewing! 🧪</h2>
      <p className="m-auto whitespace-pre-wrap px-4 text-xl text-white">
        Subscribe to our mailing list for updates
      </p>
      <form
        action="https://formspree.io/f/xeogokzw"
        method="POST"
        className="mx-auto flex w-full max-w-lg flex-col gap-y-4 px-4"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address..."
          className="rounded-lg border border-transparent bg-gray-50 p-2 text-lg text-black shadow-sm transition-all duration-300 ease-in-out hover:bg-white hover:ring-1 hover:ring-gray-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="hidden"
          name="message"
          value="I want to subscribe to the mailing list for updates!"
        />
        <button
          type="submit"
          className="rounded-full bg-agreen-500 p-2 text-lg font-semibold text-gray-700 shadow-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
