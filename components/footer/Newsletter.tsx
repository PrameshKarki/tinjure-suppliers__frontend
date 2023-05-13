const Newsletter = () => {
  return (
    <div className='  text-slate-100 py-4 pb-5 flex gap-8 lg:flex-row lg:justify-between lg:items-center flex-col'>
      <div>
        <h3 className='text-[17px]  font-[600]'>Subscribe to our newsletter</h3>
        <h4 className='text-[15px] font-[400] pt-3 text-slate-300'>
          Stay updated with the latest trends, fashion news, exclusive offers, and style tips, delivered to your inbox
          weekly.
        </h4>
      </div>
      <div>
        <div className='flex gap-2'>
          <input
            type='email'
            className='input-primary bg-slate-300 hover:bg-slate-400'
            placeholder='Enter your email'
          />
          <button className='btn-primary '>Subscribe</button>
        </div>
        <small className='text-[10px] text-slate-300'>we will never share you email to third party *</small>
      </div>
    </div>
  )
}

export default Newsletter
