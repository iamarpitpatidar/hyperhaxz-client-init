<template>
  <nav class="mt-6">
    <nav-link to="/dashboard/">
      <home-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Home</span>
    </nav-link>
    <nav-link to="/dashboard/users/">
      <users-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Users</span>
    </nav-link>
    <nav-link to="/dashboard/invites/">
      <invite-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Invite Codes</span>
    </nav-link>
    <nav-link to="/dashboard/fraud/">
      <fraud-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Fraud</span>
    </nav-link>
    <nav-link to="/dashboard/sellers/">
      <sellers-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Sellers</span>
    </nav-link>
    <hr class="my-6 border-t-2 border-blue-500">
    <nav-link to="/dashboard/profile/">
      <profile-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Profile</span>
    </nav-link>
    <nav-link to="/dashboard/subscriptions/">
      <subscription-icon class="h-5 w-5" />
      <span class="mx-4 font-medium text-gray-400">Subscriptions</span>
    </nav-link>
  </nav>
</template>

<script>
import NavLink from './links/NavLink'
import HomeIcon from '~/assets/icons/home.svg'
import FraudIcon from '~/assets/icons/fraud.svg'
import UsersIcon from '~/assets/icons/users.svg'
import InviteIcon from '~/assets/icons/invite.svg'
import ProfileIcon from '~/assets/icons/profile.svg'
import SellersIcon from '~/assets/icons/sellers.svg'
import SubscriptionIcon from '~/assets/icons/subscription.svg'

export default {
  components: {
    NavLink,
    HomeIcon,
    FraudIcon,
    UsersIcon,
    InviteIcon,
    ProfileIcon,
    SellersIcon,
    SubscriptionIcon
  }
}
</script>
