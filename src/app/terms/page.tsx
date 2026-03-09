import LegalLayout from "@/components/legal/LegalLayout";
import Section from "@/components/legal/Section";
import NavigationHeader from "@/components/NavigationHeader";

export default function TermsPage() {
  return (
    <div>
      <NavigationHeader />
      <LegalLayout title="Terms of Service">

        <Section title="Using CodeCraft">
          CodeCraft provides a browser-based coding environment for
          developers and students to write, test, and share snippets.
        </Section>

        <Section title="User Content">
          Users are responsible for any code or content they publish.
          CodeCraft does not take responsibility for user-generated content.
        </Section>

        <Section title="Acceptable Use">
          Users must not upload malicious scripts, harmful code,
          or illegal content on the platform.
        </Section>

        <Section title="Platform Availability">
          While we strive for reliability, CodeCraft cannot guarantee
          uninterrupted service at all times.
        </Section>

        <Section title="Changes to Terms">
          These terms may change as the platform evolves.
          Continued use of CodeCraft indicates acceptance of updates.
        </Section>

      </LegalLayout>
    </div>
  );
}
