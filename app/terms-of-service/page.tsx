import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata = {
  title: 'Terms of Service | Tyler Allen Personal Training',
  description: 'Terms of Service for Tyler Allen Personal Training.',
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Section className='pt-32 pb-16'>
      <Container size='md'>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>
          Terms of Service
        </h1>
        <p className='text-text-secondary mb-8'>Last Updated: {currentDate}</p>

        <div className='prose prose-invert max-w-none text-text-secondary space-y-8'>
          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity
              (&quot;you&quot;) and {SITE_CONFIG.name} (&quot;I,&quot;
              &quot;me,&quot; or &quot;my&quot;), concerning your access to and
              use of the {SITE_CONFIG.name} website as well as any other media
              form, media channel, mobile website or mobile application related,
              linked, or otherwise connected thereto (collectively, the
              &quot;Site&quot;).
            </p>
            <p className='mt-4'>
              You agree that by accessing the Site, you have read, understood,
              and agree to be bound by all of these Terms of Service. IF YOU DO
              NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
              USE IMMEDIATELY.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the Site is my proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the &quot;Content&quot;) and the trademarks,
              service marks, and logos contained therein (the &quot;Marks&quot;)
              are owned or controlled by me or licensed to me, and are protected
              by copyright and trademark laws and various other intellectual
              property rights.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              3. Medical Disclaimer
            </h2>
            <p>
              The information provided on this Site is for educational and
              informational purposes only and is not intended as a substitute
              for professional medical advice, diagnosis, or treatment. Always
              seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition.
            </p>
            <p className='mt-4'>
              <strong>Risk of Injury:</strong> Participation in exercise and
              fitness activities carries the risk of physical injury. By
              engaging in any exercises or training programs suggested by me,
              you voluntarily assume the risk of injury, accident, or death.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              4. User Representations
            </h2>
            <p>
              By using the Site, you represent and warrant that: (1) all
              registration information you submit will be true, accurate,
              current, and complete; (2) you will maintain the accuracy of such
              information and promptly update such registration information as
              necessary; (3) you have the legal capacity and you agree to comply
              with these Terms of Service; (4) you are not a minor in the
              jurisdiction in which you reside; and (5) your use of the Site
              will not violate any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              5. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and defined following the laws of
              the Commonwealth of Massachusetts. {SITE_CONFIG.name} and yourself
              irrevocably consent that the courts of Massachusetts shall have
              exclusive jurisdiction to resolve any dispute which may arise in
              connection with these terms.
            </p>
          </section>

          <section>
            <h2 className='text-xl md:text-2xl font-semibold text-text-primary mb-4'>
              6. Contact Me
            </h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact me
              at:
            </p>
            <p className='mt-2'>
              {SITE_CONFIG.name}
              <br />
              {SITE_CONFIG.email}
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
