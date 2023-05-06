import { ReactElement } from 'react'
import ProfileCard from '../../components/profile/molecules/ProfileCard'
import ProfileLayout from '../../layouts/ProfileLayout'
import { NextPageWithLayout } from '../_app'

const Profile: NextPageWithLayout = () => {
  return <ProfileCard />
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>
}

export default Profile
