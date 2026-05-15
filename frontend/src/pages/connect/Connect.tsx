import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import axios from "axios";

type ConnectForm = {
  name: string;
  email: string;
  message: string;
};

const contactLinks = [
    {
        label: "Email",
        href: "mailto:you@example.com",
        icon: MdOutlineAlternateEmail,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/your-profile",
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        href: "https://github.com/your-username",
        icon: FaGithub,
    },
] as const;

export default function Connect() {
  const [form, setForm] = useState<ConnectForm>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function updateField<K extends keyof ConnectForm>(key: K, value: ConnectForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // Data is in `form`; wire to backend here later.
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/connection`, form);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    } finally {
        setForm({
            name: "",
            email: "",
            message: "",
        });
        setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="relative w-fit">
        <p className="text-3xl font-semibold text-text w-fit">
          Connect<span className="text-emerald-600 text-5xl">.</span>
        </p>
      </div>

      <div className="bg-neutral-900 rounded-3xl sm:p-10 p-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* Left Side */}
            <div className="flex flex-col gap-10">
                <p className="sm:text-3xl text-2xl sm:leading-10 font-forum text-white">
                    Let's connect and discuss technology, frontend development, or potential opportunities.
                </p>
                {/* Contact Links */}
                <div className="flex gap-5 items-center">
                    {contactLinks.map((link) => (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/80 p-2 rounded-lg border border-white/10 group hover:bg-emerald-600 transition-colors duration-500">
                            <link.icon className="w-4 h-4 text-white" />
                        </a>
                    ))}
                </div>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                <label htmlFor="connect-name" className="text-sm text-white/80">
                    Name
                </label>
                <input
                    id="connect-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-[box-shadow,border-color] focus:border-emerald-600/40 focus:ring-2 focus:ring-emerald-600/20"
                    placeholder="Your name"
                    required
                />
                </div>

                <div className="flex flex-col gap-1.5">
                <label htmlFor="connect-email" className="text-sm text-white/80">
                    Email
                </label>
                <input
                    id="connect-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-[box-shadow,border-color] focus:border-emerald-600/40 focus:ring-2 focus:ring-emerald-600/20"
                    placeholder="you@example.com"
                    required
                />
                </div>

                <div className="flex flex-col gap-1.5">
                <label htmlFor="connect-message" className="text-sm text-white/80">
                    Message
                </label>
                <textarea
                    id="connect-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="w-full min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-[box-shadow,border-color] focus:border-emerald-600/40 focus:ring-2 focus:ring-emerald-600/20 resize-none"
                    placeholder="Please enter your message here"
                />
                </div>

                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="mt-1 w-32 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-[background-color,transform] hover:bg-emerald-700 active:scale-[0.98]"
                    >
                    { isLoading ? "Sending..." : "Connect" }
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
