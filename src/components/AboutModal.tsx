import React, { useState } from 'react';
import { AvatarIcon } from './AvatarIcon';
import { ArrowLeft, Mail, Check } from 'lucide-react';

interface AboutModalProps {
  onBackToGallery: () => void;
  onGoToCommissions: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  onBackToGallery,
  onGoToCommissions,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [quickNote, setQuickNote] = useState('');
  const [noteSent, setNoteSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('your-email@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickNote.trim()) return;
    setNoteSent(true);
    setQuickNote('');
    setTimeout(() => setNoteSent(false), 3000);
  };

  return (
    <div id="about-page-view" className="w-full space-y-10 animate-in fade-in duration-200">
      {/* Top Breadcrumb / Return */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToGallery}
          className="text-xs font-bold text-neutral-800 hover:text-sky-600 flex items-center gap-1.5 focus:outline-none transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> <span>Back to Main Gallery</span>
        </button>

        <span className="text-xs font-semibold text-neutral-400">
          Artist Profile & Bio
        </span>
      </div>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait & Quick Stats */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-neutral-50 rounded-3xl p-8 text-center flex flex-col items-center shadow-xs">
            <AvatarIcon size={140} />
            <h2 className="text-xl font-extrabold tracking-tight text-neutral-900 mt-4">
              Jo
            </h2>
            <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mt-0.5">
              Singapore-based Digital Artist
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Singapore
            </p>

            <div className="w-full pt-6 mt-6 space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full bg-neutral-900 text-white text-xs font-bold py-2.5 px-3 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Email Copied!' : 'your-email@example.com'}</span>
              </button>

              <button
                onClick={onGoToCommissions}
                className="w-full bg-white text-neutral-800 text-xs font-bold py-2.5 px-3 rounded-full hover:bg-neutral-100 transition-colors shadow-2xs"
              >
                Book a Commission →
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Narrative Biography & Studio Notes */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              THIS IS ME!
            </h1>
            <p className="text-base leading-relaxed text-neutral-800">
              Hi, I’m <strong>Jo</strong> — a Singapore-based digital artist just starting to spread my wings in the art world! 🎨
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              I’m currently exploring different art styles and having fun creating fan art, with Pokémon as my go-to muse lately.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              Beyond ACEOs, I’m branching out into products like deskmats, stickers, and keychains — so stay tuned for more! You can also catch me selling at events like AwardX, where I get to meet fellow art and Pokémon lovers in person.
            </p>
          </div>

          <div className="max-w-md bg-neutral-50 rounded-3xl p-6 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                Say Hello or Ask a Question
              </h4>
              {noteSent ? (
                <div className="bg-emerald-100 text-emerald-800 rounded-2xl p-3.5 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" /> Thanks for your note!
                </div>
              ) : (
                <form onSubmit={handleSendNote} className="space-y-2">
                  <input
                    type="text"
                    required
                    value={quickNote}
                    onChange={(e) => setQuickNote(e.target.value)}
                    placeholder="Drop a quick friendly note..."
                    className="w-full bg-white rounded-xl p-2.5 text-xs text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  <button
                    type="submit"
                    className="w-full bg-neutral-900 text-white text-xs font-bold py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-xs"
                  >
                    Send Note
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
