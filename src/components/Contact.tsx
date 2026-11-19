import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsSuccess(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: PERSONAL_INFO.web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry for Mohamed Suhail M',
          message: formData.message,
          from_name: 'Portfolio Contact Form (Mohamed Suhail M)',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setStatusMessage(
          'SUCCESS: Your message was successfully delivered directly to Mohamed Suhail via Web3Forms! Thank you.'
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      setIsSuccess(false);
      setStatusMessage(
        'Notice: Web3Forms delivery encountered a network issue. Opening your email client to complete dispatch directly...'
      );
      const mailtoSubject = encodeURIComponent(
        formData.subject ? `${formData.subject} - Portfolio Contact` : 'Opportunity Inquiry for Mohamed Suhail M'
      );
      const mailtoBody = encodeURIComponent(
        `Hello Mohamed,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F7F4] border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 pb-4 mb-12 border-b border-[#111111]">
          <span className="font-heading font-black text-4xl sm:text-5xl text-[#111111]">
            08
          </span>
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-[#555555]">
            / COMMUNICATIONS & EMPLOYMENT INQUIRY
          </span>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Large Closing Headline & Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-bold block mb-2">
                INITIATE DIALOGUE
              </span>
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-[0.95] tracking-tight uppercase mb-4">
                LET'S BUILD<br />
                SOMETHING<br />
                <span className="relative inline-block bg-[#F4D83D] px-2 py-0.5 border border-[#111111]">
                  USEFUL.
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
                Open to opportunities in Data Science, Machine Learning, AI, and analytics. Available for immediate interview scheduling and project technical reviews.
              </p>
            </div>

            {/* Direct Details Box */}
            <div className="bg-white border-2 border-[#111111] p-6 shadow-[5px_5px_0px_#111111] space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555555] block pb-2 border-b border-[#111111]/15">
                VERIFIED CONTACT CHANNELS:
              </span>

              {/* Email */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F7F7F4] border border-[#111111] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#888888] uppercase block">EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono font-bold text-[#111111] hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 border border-[#111111]/20 hover:border-[#111111] text-[#555555] hover:text-[#111111]"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between group pt-3 border-t border-[#111111]/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F7F7F4] border border-[#111111] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#888888] uppercase block">PHONE</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-mono font-bold text-[#111111] hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 border border-[#111111]/20 hover:border-[#111111] text-[#555555] hover:text-[#111111]"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#111111]/10">
                <div className="w-8 h-8 bg-[#F7F7F4] border border-[#111111] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#111111]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#888888] uppercase block">LOCATION</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#111111]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-3 border-t border-[#111111]/10 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-[#F7F7F4] border border-[#111111] text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#F4D83D] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" /> GITHUB
                  </span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 bg-[#F7F7F4] border border-[#111111] text-xs font-mono font-bold uppercase text-[#111111] hover:bg-[#F4D83D] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
                  </span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-[#111111] p-8 sm:p-10 shadow-[8px_8px_0px_#111111]">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#555555] block mb-1">
                DISPATCH MESSAGE
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-6">
                SEND DIRECT INQUIRY
              </h3>

              {statusMessage && (
                <div
                  className={`mb-6 p-4 border-2 text-xs font-mono font-bold ${
                    isSuccess
                      ? 'bg-emerald-100 text-emerald-950 border-[#111111] shadow-[3px_3px_0px_#111111]'
                      : 'bg-[#F4D83D]/50 text-[#111111] border-[#111111]'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                    >
                      YOUR NAME / ORGANIZATION *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins (Senior Recruiter)"
                      className="w-full px-4 py-3 bg-[#F7F7F4] border-2 border-[#111111] text-[#111111] placeholder-[#888888] font-sans text-sm focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#F4D83D] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                    >
                      REPLY EMAIL *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 bg-[#F7F7F4] border-2 border-[#111111] text-[#111111] placeholder-[#888888] font-sans text-sm focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#F4D83D] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="form-subject"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                  >
                    SUBJECT / POSITION SCOPE
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Data Scientist / ML Engineer Opportunity at [Company]"
                    className="w-full px-4 py-3 bg-[#F7F7F4] border-2 border-[#111111] text-[#111111] placeholder-[#888888] font-sans text-sm focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#F4D83D] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                  >
                    MESSAGE SPECIFICATIONS *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Mohamed, we reviewed your Power BI dashboards and predictive ML modeling repositories and would like to invite you for an interview..."
                    className="w-full px-4 py-3 bg-[#F7F7F4] border-2 border-[#111111] text-[#111111] placeholder-[#888888] font-sans text-sm focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_#F4D83D] transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] hover:bg-black text-[#F7F7F4] font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#F4D83D] hover:shadow-[2px_2px_0px_#F4D83D] hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#F4D83D]" />
                  <span>{isSubmitting ? 'DISPATCHING...' : 'DISPATCH MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
