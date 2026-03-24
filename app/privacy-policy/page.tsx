import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy | Tyler Allen Personal Training',
  description:
    'Privacy Policy for Tyler Allen Personal Training. Learn how your data is collected, used, and protected.',
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Section className='pt-32 pb-16'>
      <Container size='md'>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>Privacy Policy</h1>
        <p className='text-text-secondary mb-8'>Last Updated: {currentDate}</p>

        <div className='prose prose-invert max-w-none text-text-secondary space-y-8'>
          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              1. Introduction
            </h2>
            <p>
              Welcome to {SITE_CONFIG.name}. I am committed to protecting your
              personal information and your right to privacy. If you have any
              questions or concerns about this policy or my practices with
              regards to your personal information, please contact me at{' '}
              {SITE_CONFIG.email}.
            </p>
            <p className='mt-4'>
              This Privacy Policy applies to all information collected through
              my website ({SITE_CONFIG.name}) and any related services, sales,
              marketing, or events (we refer to them collectively in this
              Privacy Policy as the &quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              2. Information I Collect
            </h2>
            <p>
              I collect personal information that you voluntarily provide to me
              when expressing an interest in obtaining information about my
              products or services, when participating in activities on the
              Services (such as filling out the assessment form), or otherwise
              contacting me.
            </p>
            <p className='mt-4'>
              The personal information that I collect depends on the context of
              your interactions with me and the Services, the choices you make,
              and the products and features you use. The personal information I
              collect can include the following:
            </p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>
                Name and Contact Data. I collect your first and last name, email
                address, phone number, and other similar contact data.
              </li>
              <li>
                Health and Fitness Data. Through the assessment form, I may
                collect information about your fitness goals, exercise history,
                injuries, and other health-related information necessary to
                design a training program.
              </li>
              <li>
                Schedule Information. When you book a consultation, I collect
                information about your availability and preferred times.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              3. How I Use Your Information
            </h2>
            <p>
              I use personal information collected via my Services for a variety
              of business purposes described below. I process your personal
              information for these purposes in reliance on our legitimate
              business interests, in order to enter into or perform a contract
              with you, with your consent, and/or for compliance with my legal
              obligations.
            </p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>
                To send you administrative information. I may use your personal
                information to send you product, service and new feature
                information and/or information about changes to my terms,
                conditions, and policies.
              </li>
              <li>
                To deliver services to the user. I may use your information to
                provide you with the requested service.
              </li>
              <li>
                To respond to user inquiries/offer support. I may use your
                information to respond to your inquiries and solve any potential
                issues you might have with the use of my Services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              4. Who Will Your Information Be Shared With?
            </h2>
            <p>
              I only share information with the following third parties. I have
              categorized each party so that you may easily understand the
              purpose of my data collection and processing practices.
            </p>
            <ul className='list-disc pl-6 mt-4 space-y-2'>
              <li>
                <strong>Scheduling:</strong> Calendly (for booking
                consultations)
              </li>
              <li>
                <strong>Email Service:</strong> Resend (for processing form
                submissions)
              </li>
              <li>
                <strong>Web Analytics:</strong> Google Analytics (to analyze
                website traffic and understand how visitors use the site. Google
                Analytics uses cookies to collect information such as how often
                users visit the site, what pages they visit, and what other
                sites they used prior to coming to this site. I use the
                information to improve my website and services. Google Analytics
                collects only the IP address assigned to you on the date you
                visit the site, rather than your name or other identifying
                information. For more information about how Google uses data,
                visit{' '}
                <a
                  href='https://policies.google.com/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent hover:underline'
                >
                  Google&apos;s Privacy Policy
                </a>
                .)
              </li>
            </ul>
            <p className='mt-4'>
              I do not sell, rent, or trade your personal information with any
              third parties for their promotional purposes.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              5. How Long Do I Keep Your Information?
            </h2>
            <p>
              I will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              6. How Do I Keep Your Information Safe?
            </h2>
            <p>
              I have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information I process. However, please also remember that I cannot
              guarantee that the internet itself is 100% secure. Although I will
              do my best to protect your personal information, transmission of
              personal information to and from my Services is at your own risk.
              You should only access the services within a secure environment.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              7. Your Privacy Rights
            </h2>
            <p>
              In some regions (like Massachusetts), you have certain rights
              under applicable data protection laws. These may include the right
              (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. To make such a request, please use the contact
              details provided below.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              8. Contact Me
            </h2>
            <p>
              If you have questions or comments about this policy, you may email
              me at {SITE_CONFIG.email} or by phone at {SITE_CONFIG.phone}.
            </p>
            <p className='mt-2'>
              Tyler Allen Personal Training
              <br />
              {SITE_CONFIG.location}
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
