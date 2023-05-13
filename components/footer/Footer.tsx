import Copyright from './Copyright'
import Developer from './Developer'
import Menu from './Menu'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <div className='bg-dark-midnight-blue pt-8'>
      <div className='lg:px-20 px-4 mx-auto'>
        <Menu />
        <Newsletter />
        <Copyright />
        <Developer />
      </div>
    </div>
  )
}

export default Footer
