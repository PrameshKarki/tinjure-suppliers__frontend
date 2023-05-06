import { ReactElement } from 'react'
import ProfileCard from '../../../components/profile/molecules/ProfileCard'
import ProfileLayout from '../../../layouts/ProfileLayout'

const Information = () => {
  return <ProfileCard />
}

Information.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>
}

export default Information
