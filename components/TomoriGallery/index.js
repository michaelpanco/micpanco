import ProjectScreenshotGallery from "@micpanco/components/ProjectScreenshotGallery";
import { tomoriScreens } from "@micpanco/data/tomoriScreens";

// Compatibility wrapper for existing imports. New project pages configure the
// shared ProjectScreenshotGallery directly.
export default function TomoriGallery() {
  return (
    <ProjectScreenshotGallery
      screens={tomoriScreens}
      heading="Explore Tomori"
      description="A glimpse into the mobile experience of Tomori, an AI-powered companion platform."
      projectName="Tomori"
    />
  );
}
