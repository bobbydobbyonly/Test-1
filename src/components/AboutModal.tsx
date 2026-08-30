import React, { useState } from 'react';
import { AvatarIcon } from './AvatarIcon';
import { ArrowLeft, Mail, ExternalLink, Award, Check, Sparkles } from 'lucide-react';

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
    navigator.clipboard.writeText('jeremywinsagain@gmail.com');
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

  const clients = [
    'The New Yorker',
    'The New York Times',
    'Wired Magazine',
    'AEG (Alderac)',
    'Oh Reader Magazine',
    'McSweeney’s',
    'Chronicle Books',
    'Penguin Random House',
    'New York Magazine',
    'The Washington Post',
    'Brooklyn Brewery',
    'Seaport NYC',
  ];

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
              Jeremy Nguyen
            </h2>
            <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mt-0.5">
              Illustrator & Cartoonist
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Brooklyn, New York • SVA Alum
            </p>

            <div className="w-full pt-6 mt-6 space-y-2">
              <button
                onClick={handleCopyEmail}
                className="w-full bg-neutral-900 text-white text-xs font-bold py-2.5 px-3 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Email Copied!' : 'jeremywinsagain@gmail.com'}</span>
              </button>

              <button
                onClick={onGoToCommissions}
                className="w-full bg-white text-neutral-800 text-xs font-bold py-2.5 px-3 rounded-full hover:bg-neutral-100 transition-colors shadow-2xs"
              >
                Book a Commission →
              </button>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-neutral-50 rounded-3xl p-6 space-y-3 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600" /> Selected Honors
            </h3>
            <ul className="text-xs space-y-2 text-neutral-600">
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-900 font-bold">•</span>
                <span><strong>Society of Illustrators</strong> — Silver Medal</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-900 font-bold">•</span>
                <span><strong>American Illustration</strong> — Winner 38 & 40</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-900 font-bold">•</span>
                <span><strong>Golden Geek Nominee</strong> — Best Game Art</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Narrative Biography & Studio Notes */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              THIS IS ME!
            </h1>
            <p className="text-base leading-relaxed text-neutral-800">
              Hello! I’m <strong>Jeremy Nguyen</strong>, a cartoonist, illustrator, and board game artist living and working in Brooklyn, New York.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              My weekly gag cartoons and narrative comic strips appear regularly in <em>The New Yorker</em>, dissecting modern urban neuroses, coffee shop etiquette, subway gym routines, and millennial existentialism.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              Beyond gag cartoons, I create lush packaging and card illustrations for tabletop board games (such as <em>Santa Monica</em> and <em>Inner Compass</em> with AEG), editorial visual essays for magazines, literary book jackets for independent publishers, and custom limited-edition risograph and fine art giclée prints.
            </p>
          </div>

          {/* Client Roster Grid */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Select Editorial & Commercial Clients
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {clients.map((client) => (
                <div
                  key={client}
                  className="bg-neutral-50 rounded-2xl p-3 text-xs font-semibold text-neutral-800 text-center"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Studio Practice & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 rounded-3xl p-6 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                Drawing Tools of Choice
              </h4>
              <ul className="text-xs space-y-1.5 text-neutral-600">
                <li>• Pentel Pocket Brush Pen & Speedball Super Black Ink</li>
                <li>• Procreate on iPad Pro 12.9" with textured brushes</li>
                <li>• Hahnemühle Photo Rag 310gsm cotton paper</li>
                <li>• Clip Studio Paint for large board game layouts</li>
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-3xl p-6 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                Say Hello or Ask a Question
              </h4>
              {noteSent ? (
                <div className="bg-emerald-100 text-emerald-800 rounded-2xl p-3.5 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" /> Message sent straight to Jeremy's inbox!
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
    </div>
  );
};

