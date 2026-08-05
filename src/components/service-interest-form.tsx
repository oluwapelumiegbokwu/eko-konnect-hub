import { useState, type FormEvent, type ReactNode } from "react";

function RequiredMark({ required }: { required?: boolean }) {
  if (!required) return null;
  return (
    <span aria-hidden="true" className="text-brand">
      {" "}
      *
    </span>
  );
}

export function TextField({
  label,
  name,
  type = "text",
  required,
  hint,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
  className?: string;
}) {
  const id = `interest-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        <RequiredMark required={required} />
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
      />
      {hint ? <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  hint,
  rows = 4,
  className,
}: {
  label: string;
  name: string;
  required?: boolean;
  hint?: string;
  rows?: number;
  className?: string;
}) {
  const id = `interest-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        <RequiredMark required={required} />
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
      />
      {hint ? <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function SelectField({
  label,
  name,
  required,
  options,
  placeholder = "Select an option",
  className,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  placeholder?: string;
  className?: string;
}) {
  const id = `interest-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        <RequiredMark required={required} />
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function RadioGroupField({
  legend,
  name,
  options,
  required,
  className,
}: {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium text-foreground">
        {legend}
        <RequiredMark required={required} />
      </legend>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              className="accent-brand"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function CheckboxGroupField({
  legend,
  name,
  options,
  className,
}: {
  legend: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-foreground">
            <input type="checkbox" name={name} value={option} className="accent-brand" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function InterestFormSection({
  serviceName,
  description,
  children,
}: {
  serviceName: string;
  description?: string;
  children: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Frontend-only for now: no backend endpoint exists yet. The payload is
    // already shaped for a future POST to an API route or CRM webhook.
    const submission = Object.fromEntries(new FormData(event.currentTarget).entries());
    console.info(`Expression of interest submitted (${serviceName})`, submission);
    setSubmitted(true);
  }

  return (
    <section className="border-t border-border bg-brand-tint">
      <div className="mx-auto max-w-[900px] px-6 py-20">
        {submitted ? (
          <div className="text-center">
            <p className="eyebrow">Thank you</p>
            <h2 className="mt-3 text-2xl leading-snug text-brand-deep">
              Your interest has been recorded
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Thanks for your interest in {serviceName}. The secretariat will be in touch by email
              to discuss next steps.
            </p>
          </div>
        ) : (
          <>
            <div className="max-w-2xl rule-accent">
              <p className="eyebrow">Expression of Interest</p>
              <h2 className="mt-3 text-3xl leading-tight text-brand-deep md:text-4xl">
                Interested in {serviceName}?
              </h2>
              {description ? (
                <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
              ) : null}
            </div>
            <form onSubmit={handleSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
              {children}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-primary-foreground transition-colors hover:bg-brand-deep"
                >
                  Submit Expression of Interest
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
