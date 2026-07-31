import * as Dialog from "@radix-ui/react-dialog";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type EoiTarget = {
  serviceName: string;
  askRepository?: boolean;
};

type EoiContextValue = {
  openForm: (target: EoiTarget) => void;
};

const EoiContext = createContext<EoiContextValue | null>(null);

export function useExpressionOfInterest() {
  const ctx = useContext(EoiContext);
  if (!ctx) {
    throw new Error("useExpressionOfInterest must be used within EoiProvider");
  }
  return ctx;
}

export function ExpressionOfInterestButton({
  serviceName,
  askRepository,
  className,
}: {
  serviceName: string;
  askRepository?: boolean;
  className?: string;
}) {
  const { openForm } = useExpressionOfInterest();
  return (
    <button
      type="button"
      onClick={() => openForm({ serviceName, askRepository })}
      className={
        className ??
        "mt-7 inline-flex w-fit items-center gap-2 border-2 border-brand px-6 py-3 text-xs font-semibold tracking-[0.08em] uppercase text-brand transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      }
    >
      Expression of Interest
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const id = `eoi-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-brand">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 w-full border bg-background px-4 py-3 text-sm outline-none focus:border-brand",
          error ? "border-destructive" : "border-input",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function EoiForm({
  target,
  onCancel,
  onSubmitted,
}: {
  target: EoiTarget;
  onCancel: () => void;
  onSubmitted: () => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};

    for (const field of ["contactName", "jobTitle", "institution", "email"]) {
      if (!String(data.get(field) ?? "").trim()) {
        nextErrors[field] = "This field is required.";
      }
    }
    const email = String(data.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Frontend-only for now: no backend endpoint exists yet. The payload below
    // (service name, contact details, optional repository flag) is already
    // shaped for a future POST to an API route or CRM webhook.
    const submission = Object.fromEntries(data.entries());
    console.info("Expression of interest submitted", submission);
    onSubmitted();
  }

  return (
    <>
      <Dialog.Title className="pr-8 text-xl text-brand-deep">Expression of Interest</Dialog.Title>
      <Dialog.Description className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Tell us about your institution's interest in {target.serviceName}. The secretariat will
        follow up by email.
      </Dialog.Description>
      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <input type="hidden" name="service" value={target.serviceName} />
        <Field label="Contact name" name="contactName" required error={errors.contactName} />
        <Field label="Job title" name="jobTitle" required error={errors.jobTitle} />
        <Field label="Institution" name="institution" required error={errors.institution} />
        <Field label="Email address" name="email" type="email" required error={errors.email} />
        {target.askRepository ? (
          <fieldset>
            <legend className="text-sm font-medium text-foreground">
              Do you currently have an Institutional Repository?
            </legend>
            <div className="mt-2 flex gap-6">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <input type="radio" name="hasRepository" value="yes" className="accent-brand" />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-foreground">
                <input type="radio" name="hasRepository" value="no" className="accent-brand" />
                No
              </label>
            </div>
          </fieldset>
        ) : null}
        <div>
          <label htmlFor="eoi-additional" className="block text-sm font-medium text-foreground">
            Additional information
          </label>
          <textarea
            id="eoi-additional"
            name="additionalInfo"
            rows={4}
            className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand"
          />
        </div>
        <div className="flex flex-wrap justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="border border-input px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-brand px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-primary-foreground transition-colors hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

function SubmittedPanel({ serviceName, onClose }: { serviceName: string; onClose: () => void }) {
  return (
    <div className="py-2 text-center">
      <p className="eyebrow">Thank you</p>
      <Dialog.Title className="mt-3 text-xl text-brand-deep">
        Your interest has been recorded
      </Dialog.Title>
      <Dialog.Description className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Thanks for your interest in {serviceName}. The secretariat will be in touch by email to
        discuss next steps.
      </Dialog.Description>
      <button
        type="button"
        onClick={onClose}
        className="mt-7 border-2 border-brand px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-brand transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Close
      </button>
    </div>
  );
}

export function EoiProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<EoiTarget | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const value = useMemo<EoiContextValue>(
    () => ({
      openForm: (next) => {
        setSubmitted(false);
        setTarget(next);
      },
    }),
    [],
  );

  const close = () => setTarget(null);

  return (
    <EoiContext.Provider value={value}>
      {children}
      <Dialog.Root open={target !== null} onOpenChange={(next) => !next && close()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-brand-deep/60 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] max-h-[85vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-background p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 sm:p-8">
            <Dialog.Close
              aria-label="Close"
              className="absolute right-4 top-4 text-xl leading-none text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              ×
            </Dialog.Close>
            {target ? (
              submitted ? (
                <SubmittedPanel serviceName={target.serviceName} onClose={close} />
              ) : (
                <EoiForm target={target} onCancel={close} onSubmitted={() => setSubmitted(true)} />
              )
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </EoiContext.Provider>
  );
}
