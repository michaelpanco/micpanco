const nextsharkScreen = (file, title, description) => ({
  src: `/assets/img/projects/portfolios/ns-app/${file}`,
  title,
  description,
  width: 1170,
  height: 2532,
});

// Ordered from core reading and discovery flows through app information and
// preferences. The labels describe only what is visible in the screenshots.
export const nextsharkScreens = [
  nextsharkScreen("0.JPG", "Saved stories", "A saved-story feed with article actions and app navigation."),
  nextsharkScreen("1.JPG", "Article reader", "A full article reading experience with author and publication details."),
  nextsharkScreen("2.JPG", "About NextShark", "The in-app overview of NextShark and its publication."),
  nextsharkScreen("3.JPG", "Culture feed", "A category feed with article previews, saving, and sharing."),
  nextsharkScreen("4.JPG", "Share an article", "The native share sheet opened from a NextShark story."),
  nextsharkScreen("5.JPG", "More and settings", "App information, settings, legal links, and social navigation."),
  nextsharkScreen("6.JPG", "Display settings", "Article text sizing and dark mode preferences."),
  nextsharkScreen("7.JPG", "Notification settings", "Content warning and news notification preferences."),
];
