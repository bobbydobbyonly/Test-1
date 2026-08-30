import React, { useState } from 'react';
import { CommissionFormState } from '../types';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, DollarSign, Clock, FileCheck, HelpCircle } from 'lucide-react';

export const CommissionsView: React.FC = () => {
  const [formData, setFormData] = useState<CommissionFormState>({
    clientName: '',
    clientEmail: '',
    clientCompany: '',
    projectType: 'editorial',
    usageScope: 'editorial',
    budgetRange: '$1,500 - $3,000',
    timeline: 'Standard (2-3 Weeks)',
    description: '',
    dimensionsPref: 'Print & Digital (300 DPI CMYK + RGB)',
    agreeToTerms: true,
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Dynamic estimate calculation
  const getEstimatedRange = () => {
    let base = 800;
    if (formData.projectType === 'editorial') base = 1200;
    if (formData.projectType === 'book-cover') base = 2500;
    if (formData.projectType === 'board-game') base = 4000;
    if (formData.projectType === 'commercial') base = 3500;
    if (formData.projectType === 'private') base = 750;

    let multiplier = 1.0;
    if (formData.usageScope === 'commercial') multiplier = 1.5;
    if (formData.usageScope === 'buyout') multiplier = 2.2;
    if (formData.usageScope === 'personal') multiplier = 0.8;

    const min = Math.round(base * multiplier);
    const max = Math.round(min * 1.4);
    return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientEmail || !formData.description) return;

    const newRefId = `JN-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedId(newRefId);

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div id="commissions-view" className="w-full space-y-12 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-1">
          Client Inquiries & Freelance Booking
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
          Commission Jeremy Nguyen
        </h1>
        <p className="text-sm text-neutral-600 max-w-2xl mt-1.5 leading-relaxed">
          Jeremy is currently accepting select commissions for editorial publications, book jackets, board games, brand storytelling, and private art collectors. Let's discuss your timeline, scope, and vision.
        </p>
      </div>

      {/* Grid: 3 Pillars / Work Archetypes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl p-6 bg-neutral-50 space-y-2.5">
          <div className="w-7 h-7 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h3 className="font-bold text-base tracking-tight text-neutral-900">
            Editorial & Press
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Spot cartoons, full-page illustrations, and visual essays for magazines, news outlets, and literary journals. Fast turnarounds available for breaking news.
          </p>
          <div className="text-[11px] text-neutral-400 pt-2">
            Lead Time: 3–7 business days
          </div>
        </div>

        <div className="rounded-3xl p-6 bg-neutral-50 space-y-2.5">
          <div className="w-7 h-7 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-xs">
            2
          </div>
          <h3 className="font-bold text-base tracking-tight text-neutral-900">
            Publishing & Games
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Hardcover dust jackets, graphic novels, board game box covers, card decks, and packaging illustrations. End-to-end concept art and production files.
          </p>
          <div className="text-[11px] text-neutral-400 pt-2">
            Lead Time: 3–8 weeks
          </div>
        </div>

        <div className="rounded-3xl p-6 bg-neutral-50 space-y-2.5">
          <div className="w-7 h-7 rounded-full bg-neutral-200 text-neutral-800 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <h3 className="font-bold text-base tracking-tight text-neutral-900">
            Commercial & Brand
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Brand narrative campaigns, illustrated murals, product packaging, bespoke merchandise, and key visuals with full commercial licensing options.
          </p>
          <div className="text-[11px] text-neutral-400 pt-2">
            Lead Time: 2–6 weeks
          </div>
        </div>
      </div>

      {/* Booking Form or Confirmation Stage */}
      {submittedId ? (
        <div
          id="commission-success-card"
          className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto space-y-6 shadow-sm animate-in zoom-in-95 duration-200"
        >
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              Reference #{submittedId}
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
              Inquiry Received!
            </h2>
            <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-neutral-900">{formData.clientName}</span>. Jeremy and his studio coordinator will review your project brief and reply to <span className="font-bold text-neutral-900">{formData.clientEmail}</span> within 24–48 hours.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-4 text-left text-xs space-y-1.5 text-neutral-700 max-w-md mx-auto">
            <div><strong>Project:</strong> {formData.projectType.toUpperCase()}</div>
            <div><strong>Estimated Range:</strong> {getEstimatedRange()}</div>
            <div><strong>Target Timeline:</strong> {formData.timeline}</div>
            <div><strong>Usage Scope:</strong> {formData.usageScope.toUpperCase()}</div>
          </div>

          <button
            onClick={() => {
              setSubmittedId(null);
              setFormData({
                clientName: '',
                clientEmail: '',
                clientCompany: '',
                projectType: 'editorial',
                usageScope: 'editorial',
                budgetRange: '$1,500 - $3,000',
                timeline: 'Standard (2-3 Weeks)',
                description: '',
                dimensionsPref: 'Print & Digital (300 DPI CMYK + RGB)',
                agreeToTerms: true,
              });
            }}
            className="bg-neutral-900 text-white text-xs font-bold py-3 px-6 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Submit Another Project Brief
          </button>
        </div>
      ) : (
        <form
          id="commission-form"
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 md:p-10 space-y-7 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900">
              Project Inquiry & Scope Estimator
            </h2>
            <div className="text-xs text-neutral-500">
              Est. Range: <span className="font-bold text-neutral-900 text-sm">{getEstimatedRange()}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 block">
                Your Name *
              </label>
              <input
                required
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-neutral-50 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 block">
                Email Address *
              </label>
              <input
                required
                type="email"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                placeholder="s.jenkins@publication.com"
                className="w-full bg-neutral-50 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 block">
                Company / Publication
              </label>
              <input
                type="text"
                value={formData.clientCompany}
                onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
                placeholder="e.g. The New Yorker / Self"
                className="w-full bg-neutral-50 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 transition-all"
              />
            </div>
          </div>

          {/* Project Type & Scope Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-700 block">
                Project Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'editorial', label: 'Editorial / Magazine' },
                  { id: 'book-cover', label: 'Book / Album Cover' },
                  { id: 'board-game', label: 'Board Game Art' },
                  { id: 'commercial', label: 'Brand / Advertising' },
                ].map((type) => (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        projectType: type.id as CommissionFormState['projectType'],
                      })
                    }
                    className={`p-3 text-xs text-left rounded-2xl transition-all ${
                      formData.projectType === type.id
                        ? 'bg-neutral-900 text-white font-bold shadow-xs'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-700 block">
                Licensing & Usage Rights
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'editorial', label: 'Editorial (Print & Web)' },
                  { id: 'commercial', label: 'Commercial Campaign' },
                  { id: 'personal', label: 'Private / Non-Comm' },
                  { id: 'buyout', label: 'Copyright Buyout' },
                ].map((scope) => (
                  <button
                    type="button"
                    key={scope.id}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        usageScope: scope.id as CommissionFormState['usageScope'],
                      })
                    }
                    className={`p-3 text-xs text-left rounded-2xl transition-all ${
                      formData.usageScope === scope.id
                        ? 'bg-neutral-900 text-white font-bold shadow-xs'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {scope.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline & Budget Ranges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 block">
                Desired Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-neutral-50 rounded-xl p-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
              >
                <option value="Rush (< 1 Week)">Rush Delivery (&lt; 1 Week)</option>
                <option value="Standard (2-3 Weeks)">Standard Delivery (2–3 Weeks)</option>
                <option value="Flexible (1-2 Months)">Flexible Schedule (1–2 Months)</option>
                <option value="Future Quarter">Future Publishing Quarter</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 block">
                Allocated Budget
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full bg-neutral-50 rounded-xl p-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
              >
                <option value="$800 - $1,500">$800 – $1,500 (Single spot / small)</option>
                <option value="$1,500 - $3,000">$1,500 – $3,000 (Full page editorial)</option>
                <option value="$3,000 - $6,000">$3,000 – $6,000 (Cover / Key visual)</option>
                <option value="$6,000+">$6,000+ (Full Game / Packaging Suite)</option>
              </select>
            </div>
          </div>

          {/* Description / Brief */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 block">
              Project Description & Creative Brief *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell Jeremy about the tone, characters, dimensions, color preferences, and background of the project..."
              className="w-full bg-neutral-50 rounded-2xl p-3 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="submit-commission-btn"
              type="submit"
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-3.5 px-6 rounded-full flex items-center justify-center space-x-2 shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Project Brief & Request Estimate</span>
            </button>
          </div>
        </form>
      )}

      {/* FAQ Section */}
      <div className="bg-neutral-50 rounded-3xl p-7 md:p-8 space-y-6">
        <h3 className="text-base font-bold tracking-tight text-neutral-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-600" /> Commission FAQ
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-600">
          <div className="space-y-1">
            <h4 className="font-bold text-neutral-900">How does the revision process work?</h4>
            <p className="leading-relaxed">
              Every commission includes 2 rounds of rough pencil/digital sketch concepts, followed by color palette approvals, and up to 2 rounds of final polish adjustments.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-neutral-900">What deliverables are provided?</h4>
            <p className="leading-relaxed">
              High-resolution layered Photoshop (.PSD), vector (.AI/.SVG) where applicable, and 300 DPI CMYK TIFF files formatted for offset and digital press.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-neutral-900">Do you accept rush deadlines?</h4>
            <p className="leading-relaxed">
              Yes, 24-to-48 hour turnaround editorial spots for breaking news can be accommodated subject to studio schedule with an applicable rush fee.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-neutral-900">Payment terms and deposits</h4>
            <p className="leading-relaxed">
              Standard commercial terms are 50% deposit upon sketch commencement, and 50% upon final high-resolution deliverable approval via ACH or wire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

