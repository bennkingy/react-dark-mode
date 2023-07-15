const Intro = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
       Plumbing and heating services
          </h2>
          <p className="mb-4">
   At Mallard Plumbing & Heating services we understand just how inconvenient it can be when a problem arises with you are plumbing or heating systems. Rest assured we can resolve the issue for you. Always on hand to help, we will ensure a gas safe, city and guilds accredited engineer will attend your property and provide you with a rapid and affordable solution wherever possible.
          </p>
          <p>
Having built a reputation in the local area for our swift response times, excellent communication, and quality work, we endeavour to deliver a first class service you would be happy to recommend. Boiler repairs Boilers are an integral part of any household, and we understand just how frustrating it can be when your boiler develops a fault, and you're subsequently left without heating or hot water in your home.

          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro