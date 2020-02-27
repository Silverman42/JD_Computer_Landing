import ShadowBg from '~/components/global/layout/shadow_bg'
import ContainerRouterLink from '~/components/global/links/ContainerRouter'
import MagnifiedBgRouterLink from '~/components/global/links/MagnifiedBgRouter'
import PrimaryBtn from '~/components/utilities/buttons'
import PrimaryLinkBtn from '~/components/utilities/LinkButton'
import PrimaryRouteBtn from '~/components/utilities/RouteButton'
import Vue from 'vue'

Vue.component('shadow-bg', ShadowBg)
Vue.component('primary-btn', PrimaryBtn)
Vue.component('primary-link-btn', PrimaryLinkBtn)
Vue.component('primary-route-btn', PrimaryRouteBtn)
Vue.component('container-link', ContainerRouterLink)
Vue.component('magnified-bg-link', MagnifiedBgRouterLink)
