const tomoriScreen = (file, title, height, description) => ({
  src: `/assets/img/projects/portfolios/tomori/${file}`,
  title,
  description,
  width: 393,
  height,
});

// Ordered to tell the product story from entry and onboarding through the core
// social and profile experiences. Reorder this array to change the carousel.
export const tomoriScreens = [
  tomoriScreen("Welcome.png", "Welcome", 852, "Tomori’s welcome and account entry screen."),
  tomoriScreen("Sign In.png", "Sign in", 863, "Account sign-in experience."),
  tomoriScreen("Sign Up.png", "Create an account", 1022, "New account registration flow."),
  tomoriScreen("Onboarding 1.png", "Choose your experience", 655, "First step of the Tomori onboarding flow."),
  tomoriScreen("Onboarding 2.png", "Personalize your profile", 746, "Profile setup during onboarding."),
  tomoriScreen("Onboarding 3.png", "Find companions", 712, "Companion discovery during onboarding."),
  tomoriScreen("Onboarding 4.png", "Ready to begin", 625, "Final onboarding step."),
  tomoriScreen("Dashboard.png", "Home feed", 975, "The main social feed and companion stories."),
  tomoriScreen("Dashboard Sidebar.png", "Navigation menu", 949, "Expanded navigation from the home feed."),
  tomoriScreen("Dashboard New Post.png", "Create a post", 949, "Post creation interface."),
  tomoriScreen("Dashboard Edit Post.png", "Edit a post", 949, "Post editing interface."),
  tomoriScreen("Dashboard - Reactions Clicked.png", "Post reactions", 815, "Reaction options on a feed post."),
  tomoriScreen("Dashboard - Reactions Clicked-1.png", "Reaction details", 830, "Expanded reaction state on the home feed."),
  tomoriScreen("Profile - About.png", "Profile overview", 870, "A companion profile and its About tab."),
  tomoriScreen("Profile - About-1.png", "Profile details", 870, "An alternate About profile state."),
  tomoriScreen("Profile - Posts.png", "Profile posts", 1259, "Posts shared from a companion profile."),
  tomoriScreen("Profile - Photos.png", "Profile photos", 875, "Photo gallery within a companion profile."),
  tomoriScreen("Profile - Photo Clicked.png", "Photo preview", 883, "Expanded photo viewing experience."),
  tomoriScreen("Profile - Send Connection.png", "Send a connection", 742, "Connection request action on a profile."),
  tomoriScreen("Profile - Connection Sent.png", "Connection sent", 742, "Confirmation state for a connection request."),
  tomoriScreen("Profile - Connected.png", "Connected profile", 877, "Profile state after connecting."),
  tomoriScreen("Profile - Private.png", "Private profile", 742, "Restricted profile state."),
  tomoriScreen("Profile - To Subscribe.png", "Subscription preview", 879, "Profile invitation to unlock exclusive content."),
  tomoriScreen("Profile - To Subscribe-1.png", "Subscription options", 879, "Alternate subscription prompt state."),
  tomoriScreen("Profile - Exclusive.png", "Exclusive profile", 1241, "Exclusive companion content and subscription details."),
  tomoriScreen("Profile - Exclusive-1.png", "Exclusive content", 875, "Alternate exclusive profile state."),
  tomoriScreen("Profile - Exclusive Subscribed.png", "Subscribed experience", 876, "Exclusive profile after subscribing."),
];
