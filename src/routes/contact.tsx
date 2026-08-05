import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/page-parts";
import { contact } from "@/lib/site-nav";
import { RadioGroupField, TextAreaField, TextField } from "@/components/service-interest-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Eko-Konnect" },
      {
        name: "description",
        content:
          "Get in touch with the Eko-Konnect secretariat — address, phone number and email, plus a contact form.",
      },
      { property: "og:title", content: "Contact Us | Eko-Konnect" },
      {
        property: "og:description",
        content: "Address, phone number and email for the Eko-Konnect secretariat.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Frontend-only for now: no backend endpoint exists yet. The payload is
    // already shaped for a future POST to an API route or CRM webhook.
    const submission = Object.fromEntries(new FormData(event.currentTarget).entries());
    console.info("Contact form submitted", submission);
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        lead="Have a question, some feedback, or need a hand with something? Fill in the form below and we'll make sure it reaches the right team for a prompt response."
      />
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 border border-border p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="eyebrow">Secretariat</p>
            <h2 className="mt-3 text-2xl leading-snug text-brand-deep">Our Information</h2>
            <dl className="mt-7 space-y-6 text-sm leading-relaxed text-foreground/85">
              <div>
                <dt className="font-semibold text-brand-deep">Address</dt>
                <dd className="mt-1">{contact.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-deep">Phone Number</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-brand hover:text-brand-deep"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-brand-deep">Email Address</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="text-brand hover:text-brand-deep">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
              We take your privacy seriously. Any personal information you share through this form
              is handled securely and used only for Eko-Konnect related purposes.
            </p>
          </div>

          {submitted ? (
            <div className="self-center text-center">
              <p className="eyebrow">Thank you</p>
              <h2 className="mt-3 text-2xl leading-snug text-brand-deep">
                Your message has been sent
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Thanks for reaching out. The secretariat will follow up with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="self-center">
              <fieldset>
                <legend className="eyebrow">Personal Information</legend>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <TextField label="First Name" name="firstName" required />
                  <TextField label="Last Name" name="lastName" required />
                  <TextField label="Organisation" name="organisation" />
                  <TextField label="State" name="state" />
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="eyebrow">Preferred Contact</legend>
                <div className="mt-4 space-y-5">
                  <RadioGroupField
                    legend="Phone or email?"
                    name="preferredContact"
                    options={["Phone", "Email"]}
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField label="Phone Number" name="phone" type="tel" />
                    <TextField label="Email" name="email" type="email" required />
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-8">
                <legend className="eyebrow">How can we help you?</legend>
                <div className="mt-4 space-y-5">
                  <TextField label="Reason for your enquiry" name="reason" />
                  <TextAreaField label="Your enquiry" name="enquiry" required />
                </div>
              </fieldset>

              <button
                type="submit"
                className="mt-7 w-full bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-primary-foreground transition-colors hover:bg-brand-deep sm:w-auto"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
