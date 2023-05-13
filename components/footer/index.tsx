import Copyright from './Copyright' 
import Menu from './Menu'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <div className='bg-dark-midnight-blue pt-8'>
      <div className='px-6 py-3 mx-auto'>
        <Menu />
        <Newsletter />
        <Copyright />    
      </div>
    </div>
  )
}

export default Footer
