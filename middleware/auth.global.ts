import { useUser } from "~/stores/user";

export default defineNuxtRouteMiddleware((to) => {
  // Skip middleware on server
  if (import.meta.server) return;

  // Skip on initial hydration if the page is server-rendered
  const nuxtApp = useNuxtApp();
  if (
    import.meta.client &&
    nuxtApp.isHydrating &&
    nuxtApp.payload.serverRendered
  )
    return;

  const user = useUser();
  const { isVerifiedUser, isLogged } = storeToRefs(user);

  // Define routes
  const authRoutes = ["auth-login", "auth-register", "auth-verify"];
  const unloggedRoutes = [
    "index",
    "contact",
    "about",
    "programs-enroll",
    "programs",
    "programs-success",
  ];

  // Redirect logged-in users away from auth pages

  // if (
  //   authRoutes.includes(to.name as string) &&
  //   isLogged.value &&
  //   isVerifiedUser.value
  // ) {
  //   console.log("logggg");
  //   return navigateTo("/dashboard");
  // }

  // Redirect unlogged users trying to access protected pages
  const isPublicPage = [...authRoutes, ...unloggedRoutes].includes(
    to.name as string
  );
  if (!user.isLogged && !isPublicPage) {
    console.log("here");
    return navigateTo("/auth/login");
  }
});
