'use client';

import { Character } from '../data/story';
import { motion } from 'framer-motion';

interface CharacterPanelProps {
  character: Character;
}

export default function CharacterPanel({ character }: CharacterPanelProps) {
  const getCharacterColor = (name: string) => {
    const colors: { [key: string]: string } = {
      Luna: 'from-purple-600 to-indigo-600',
      Morpheus: 'from-blue-600 to-cyan-600',
      'Nightmare King': 'from-red-900 to-black',
      Stella: 'from-green-500 to-emerald-600',
      'Dream Sprites': 'from-pink-400 to-purple-400',
    };
    return colors[name] || 'from-purple-600 to-pink-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 hover:scale-105 transition-transform"
    >
      {/* Character Name with Color */}
      <div className={`bg-gradient-to-r ${getCharacterColor(character.name)} rounded-lg p-4 mb-4`}>
        <h3 className="text-3xl font-bold text-white text-center">{character.name}</h3>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-purple-200 mb-2">📖 Role</h4>
        <p className="text-white">{character.description}</p>
      </div>

      {/* Appearance */}
      <div className="mb-4 bg-purple-900/30 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-purple-200 mb-2">👁️ Appearance</h4>
        <p className="text-purple-100 text-sm leading-relaxed">{character.appearance}</p>
      </div>

      {/* Personality */}
      <div className="bg-pink-900/30 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-purple-200 mb-2">✨ Personality</h4>
        <p className="text-purple-100 text-sm">{character.personality}</p>
      </div>
    </motion.div>
  );
}
