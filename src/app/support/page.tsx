import LegalLayout from "@/components/legal/LegalLayout";
import Section from "@/components/legal/Section";
import NavigationHeader from "@/components/NavigationHeader";

export default function SupportPage() {
  return (
    <div>
      <NavigationHeader/>
      <LegalLayout title="Support">

        <Section title="Getting Help">
          If you encounter issues using CodeCraft, our support team
          is available to help resolve problems quickly.
        </Section>

        <Section title="Common Issues">
          • Running code snippets
          • Authentication problems
          • Saving or sharing snippets
          • Platform bugs
        </Section>

        <Section title="Contact Support">
          Email: parbejansariyt@gmail.com
          <br />
          Response time: 24-48 hours.
        </Section>

        <Section title="Community">
          CodeCraft encourages developers to share knowledge,
          help each other, and collaborate through code snippets.
        </Section>

      </LegalLayout>
    </div>
  );
}
