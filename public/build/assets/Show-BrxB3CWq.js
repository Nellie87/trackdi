import{_ as c}from"./AppLayout-B_CGEyA6.js";import p from"./DeleteUserForm-DIy-yB9Z.js";import l from"./LogoutOtherBrowserSessionsForm-DgQrmeWa.js";import{S as s}from"./SectionBorder-7SiAiT_P.js";import f from"./TwoFactorAuthenticationForm-BhYlRiZ3.js";import u from"./UpdatePasswordForm-Xf-S4ah0.js";import _ from"./UpdateProfileInformationForm-jMmvv_li.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-Dg0me76W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-DF5VbiUv.js";import"./SectionTitle-GDMrqlm_.js";import"./DangerButton-CYwTB_iS.js";import"./TextInput-ClZkVNBt.js";import"./SecondaryButton-BTeHHHBu.js";import"./ActionMessage-CIk-qDxp.js";import"./PrimaryButton-Vbwl5yJ3.js";import"./InputLabel-7xiTXuDY.js";import"./FormSection-hZWEGtJz.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
