"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/seo/site";
import { Icon } from "./ui/Icon";

const fieldClass =
  "w-full rounded-md border border-navy/15 bg-ice px-3 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultProduct = useMemo(
    () => searchParams.get("produto") ?? "",
    [searchParams],
  );
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      nome: String(formData.get("nome") || ""),
      email: String(formData.get("email") || ""),
      empresa: String(formData.get("empresa") || ""),
      plataforma: String(formData.get("plataforma") || ""),
      necessidade: String(formData.get("necessidade") || ""),
      produto: String(formData.get("produto") || ""),
    };

    const subject = encodeURIComponent(
      `Contato eFcinco — ${payload.empresa || payload.nome}`,
    );
    const body = encodeURIComponent(
      `Nome: ${payload.nome}\nE-mail: ${payload.email}\nEmpresa: ${payload.empresa}\nPlataforma: ${payload.plataforma}\nProduto de interesse: ${payload.produto}\n\nNecessidade:\n${payload.necessidade}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 ring-1 ring-navy/8 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="E-mail" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Empresa" name="empresa" required />
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-navy">Plataforma atual</span>
          <select name="plataforma" className={fieldClass} defaultValue="VTEX IO">
            <option>VTEX IO</option>
            <option>VTEX Legacy</option>
            <option>Outra plataforma</option>
            <option>Ainda não tenho loja</option>
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-2 block font-medium text-navy">Interesse</span>
        <select name="produto" className={fieldClass} defaultValue={defaultProduct}>
          <option value="">Selecione</option>
          <option value="diagnostico-vtex">Diagnóstico VTEX</option>
          <option value="implantacao">Implantação</option>
          <option value="migracao">Migração</option>
          <option value="manutencao">Manutenção</option>
          <option value="iugis-chatbot">Iugis Chatbot</option>
          <option value="iugis-automacoes">Iugis Automações</option>
          <option value="iugis-sob-medida">Iugis Sob Medida</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-2 block font-medium text-navy">Como podemos ajudar?</span>
        <textarea
          name="necessidade"
          required
          rows={5}
          className={fieldClass}
          placeholder="Conte sobre sua operação, prazos e principais desafios."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover sm:w-auto"
      >
        Enviar mensagem
      </button>
      {status === "sent" ? (
        <p className="flex items-center gap-2 text-sm text-brand" role="status">
          <Icon icon={CheckCircle2} size={18} />
          Abrimos seu cliente de e-mail com a mensagem pronta. Se preferir, fale no WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block font-medium text-navy">{label}</span>
      <input name={name} type={type} required={required} className={fieldClass} />
    </label>
  );
}
