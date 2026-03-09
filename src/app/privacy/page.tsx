import LegalLayout from "@/components/legal/LegalLayout";
import Section from "@/components/legal/Section";
import NavigationHeader from "@/components/NavigationHeader";

export default function PrivacyPage() {
  return (
    <div>
      <NavigationHeader />
      <LegalLayout title="Privacy Policy">

        <Section title="Information We Collect">
          We may collect information such as browser type, IP address,
          device details, and pages visited to improve the platform
          experience.
        </Section>

        <Section title="Cookies">
          CodeCraft uses cookies to enhance user experience,
          remember preferences, and analyze site traffic.
        </Section>

        <Section title="Google AdSense">
          Third-party vendors including Google may use cookies
          to serve ads based on previous visits to this or other websites.
          Users may opt out of personalized advertising by visiting
          Google&apos;s Ads Settings.
        </Section>

        <Section title="Third-Party Services">
          We may integrate services such as authentication providers,
          analytics platforms, and advertising networks that collect
          information according to their own privacy policies.
        </Section>

        <Section title="Policy Updates">
          This Privacy Policy may be updated periodically to reflect
          changes in our services or legal requirements.
        </Section>

      </LegalLayout>
    </div>
  );
}
