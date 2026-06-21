"use client";

import { FormEvent, useState } from "react";
import { workTypeOptions } from "@/data/home";

const fieldClasses =
  "min-h-12 w-full rounded-[6px] border border-[#2F4A3C]/14 bg-[#FCFBF8] px-4 py-3 text-sm text-[#2B2B2B] outline-none transition placeholder:text-[#6D6A64]/58 focus:border-[#B79A6B] focus:ring-4 focus:ring-[#B79A6B]/15";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Заявка подготовлена. Подключение отправки будет добавлено позже.");
    event.currentTarget.reset();
  }

  return (
    <form
      className="rounded-[6px] border border-[#2F4A3C]/12 bg-[#FCFBF8] p-5 shadow-[0_22px_70px_rgba(16,19,18,0.08)] sm:p-7"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-[#2F4A3C]">
          Имя
          <input
            className={fieldClasses}
            name="name"
            placeholder="Ваше имя"
            type="text"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#2F4A3C]">
          Телефон
          <input
            className={fieldClasses}
            name="phone"
            placeholder="+7 ___ ***-**-*_"
            type="tel"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#2F4A3C]">
          Тип работ
          <select className={fieldClasses} defaultValue="" name="workType">
            <option disabled value="">
              Выберите тип работ
            </option>
            {workTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#2F4A3C]">
          Комментарий
          <textarea
            className={`${fieldClasses} min-h-32 resize-y leading-6`}
            name="comment"
            placeholder="Кратко опишите задачу"
          />
        </label>
      </div>

      <button
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-[6px] border border-[#2F4A3C] bg-[#2F4A3C] px-5 py-3 text-sm font-semibold leading-none text-[#FCFBF8] shadow-[0_18px_45px_rgba(16,19,18,0.18)] transition duration-200 hover:border-[#24382E] hover:bg-[#24382E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A6B]"
        type="submit"
      >
        Отправить заявку
      </button>

      <p className="mt-4 text-xs leading-5 text-[#6D6A64]">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>

      {message ? (
        <p
          aria-live="polite"
          className="mt-4 rounded-[6px] border border-[#556B57]/20 bg-[#556B57]/8 px-4 py-3 text-sm font-medium text-[#2F4A3C]"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
