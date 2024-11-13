"use client";

import React, { useEffect, useRef } from "react";

import {
  IconCheck,
  IconLoader2,
  IconMail,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import { ContactFunction } from "~/lib/actions";
import { cn } from "~/lib/utils";
import { Button } from "~/ui/button";
import { IconInput } from "~/ui/icon-input";
import { Label } from "~/ui/label";
import { Textarea } from "~/ui/textarea";

type TranslationType = {
  name: string;
  email: string;
  message: string;
  send: string;
};

type Props = {
  locale: string;
  translations: TranslationType;
  className?: string;
  dark?: boolean;
};

const ToastMessage = (status: "success" | "fail", message: string) =>
  toast("", {
    description: (
      <div className="flex items-center space-x-3">
        {status === "success" && (
          <IconCheck size={24} className="text-green-500" />
        )}
        {status === "fail" && <IconX size={24} className="text-red-500" />}
        <p className="font-semibold">{message}</p>
      </div>
    ),
  });

const ContactPageFormComponent: React.FC<Props> = (props) => {
  const { locale, translations, className, dark } = props;
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useFormState(ContactFunction, null);

  const textColor = dark ? "text-black/90" : "text-white";

  useEffect(() => {
    if (state) {
      if (state.status === "success") {
        ToastMessage(
          "success",
          locale === "pl" ? "Wysłano wiadomość!" : locale === "de" ? "E-Mail wurde gesendet!" : "Email has been sent!"
        );
        formRef.current?.reset();
      } else {
        ToastMessage(
          "fail",
          locale === "pl" ? "Nie udało się wysłać wiadomości"
            : locale === "de" ? "Ihre E-Mail konnte nicht gesendet werden" 
            : "Failed to send your email"
        );
      }
    }
  }, [locale, state]);

  // let messagePlaceholder = (locale === "pl" ? "Wiadomość" : locale === "de" ? "Nachricht" : "Message") + "...";

  return (
    <div className={cn("mx-auto", className)}>
      <form ref={formRef} action={action}>
        <div className="space-y-2">
          <div>
            <Label htmlFor="name" className={textColor}>
              {translations.name}
            </Label>
            <IconInput
              id="name"
              name="name"
              icon={<IconUser size={20} className="text-slate-500" />}
              placeholder={
                //translations.name
                locale === "pl" ? "Imię i nazwisko" : locale === "de" ? "Vor- und Nachname" : "First and Last Name"              }
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className={textColor}>
              {translations.email}
            </Label>
            <IconInput
              id="email"
              name="email"
              type="email"
              icon={<IconMail size={20} className="text-slate-500" />}
              placeholder={
                //translations.email
                locale === "pl" ? "Adres email" : locale === "de" ? "E-Mail-Adresse" : "Email address"
              }
              required
            />
          </div>
          <div>
            <Label className={textColor} htmlFor="message">
              {translations.message}
            </Label>
            <Textarea
              id="message"
              name="message"
              className="resize-none h-[110px]"
              placeholder={
                //translations.message + "..."
                // messagePlaceholder
                (locale === "pl" ? "Wiadomość" : locale === "de" ? "Nachricht" : "Message") + "..."
              }
              required
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <SubmitFormButton text={/*translations.send*/
          locale === "pl" ? "Wyślij" : locale === "de" ? "Schicken" : "Send"
          }/>
        </div>
        {/* {state && state.status === "fail" && (
          <p className="text-red-500 font-semibold mt-2">
            Failed to send email
          </p>
        )}
        {state && state.status === "success" && (
          <p className="text-green-500 font-semibold mt-2">
            Email has been sent
          </p>
        )} */}
      </form>
    </div>
  );
};

export default ContactPageFormComponent;

type SubmitProps = {
  text?: string;
};

const SubmitFormButton: React.FC<SubmitProps> = (props) => {
  const { text } = props;
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="px-8 mt-4" style={{backgroundColor: "#F57F17"}}>
      {pending && <IconLoader2 size={16} className="mr-2 animate-spin" />}
      {text ?? "Send"}
    </Button>
  );
};
