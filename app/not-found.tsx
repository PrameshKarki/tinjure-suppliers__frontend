const Page = () => {
  return (
    <div>
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-8xl font-[1000] text-blue-600'>404</p>
          <h1 className='mt-4 text-[24px]  font-bold tracking-tight text-gray-900'>Page not found</h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>Sorry, we couldn’t find the page you’re looking for.</p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Continue shopping
            </a>
            <a href='mailto:contact@tinjure.com' className='text-sm font-semibold text-gray-900'>
              Contact support <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
