import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MessageCircle,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  "Professional Drone Survey",
  "Solar Panel Drone Inspection",
  "Wedding & Aerial Event Photography",
  "Real Estate Drone Service",
  "Power Utility Pole & Line Inspection",
  "Construction Progress Monitoring",
  "Live Streaming Drone Service",
  "Telugu Folk Song Drone Cinematography",
  "Luxury Drone Services",
  "Commercial Drone Approvals",
  "Other",
];

const emailServiceId = "service_2k2qrfx";
const emailTemplateId = "template_mf3ntek";
const emailPublicKey = "ldX0CnqDPhwjlrLy6";

const LeadFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.date
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(emailServiceId, emailTemplateId, form, emailPublicKey);
      toast.success("Your enquiry has been sent successfully.");
    } catch (error) {
      console.error("Failed to send enquiry with EmailJS:", error);
      toast.error("Could not send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="label-tag mb-4 inline-flex border-sky-200 bg-white text-sky-700">
            Project enquiry
          </span>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Take your project <span className="text-sky-600">into view.</span>
          </h2>

          <p className="mb-7 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Tell us about your project in Hyderabad, Telangana or Andhra Pradesh. We’ll help plan the right crew, equipment and compliance steps.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Clock className="h-4 w-4 text-sky-600" />
              Project-specific crew and flight planning
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MessageCircle className="h-4 w-4 text-sky-600" />
              Approval requirements reviewed before flight
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Zap className="h-4 w-4 text-sky-600" />
              Better planning starts with location
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Hyderabad airspace restrictions can require prior Digital Sky
              permissions or NOCs. Include your site location and we’ll help
              identify the approval steps to check.
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-9"
        >
          {/* NAME + EMAIL */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name *"
              aria-label="Your name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="input"
            />

            <input
              type="email"
              placeholder="Email address *"
              aria-label="Email address"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="input"
            />
          </div>

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Phone number *"
            aria-label="Phone number"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="input"
          />

          {/* SERVICE */}
          <div>
            <label className="text-sm text-foreground mb-1 block">
              Select Your Service *
            </label>
            <select
              value={form.service}
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
              className="input"
              required
            >
              <option value="">Choose Service</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* DATE */}
<div>
  <label className="text-sm font-medium text-foreground mb-2 block">
    Select Date *
  </label>

  <div className="relative">
    {/* Icon */}
    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />

    {/* Input */}
    <input
      type="date"
      value={form.date}
      aria-label="Preferred project date"
      required
      onChange={(e) =>
        setForm({ ...form, date: e.target.value })
      }
      className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-white/80 backdrop-blur-md text-foreground text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
    />
  </div>
</div>

          {/* MESSAGE */}
          <textarea
            placeholder="Project location, scope and any other details (optional)"
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="input resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 font-semibold text-white transition hover:bg-sky-700"
          >
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            {loading ? "Sending enquiry..." : "Send Enquiry"}
          </button>

          <p className="text-center text-xs leading-5 text-slate-500">
            Your enquiry will be sent to skydigilens
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadFormSection;