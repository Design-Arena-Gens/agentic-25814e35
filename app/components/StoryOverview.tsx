'use client';

import { storyMetadata, scenes } from '../data/story';
import { motion } from 'framer-motion';

export default function StoryOverview() {
  const totalDuration = scenes.reduce((acc, scene) => acc + scene.duration, 0);
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Main Info Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-4">Story Information</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-200 mb-2">📊 Basic Info</h3>
            <ul className="space-y-2 text-white">
              <li>
                <span className="text-purple-300">Genre:</span> {storyMetadata.genre}
              </li>
              <li>
                <span className="text-purple-300">Target Audience:</span>{' '}
                {storyMetadata.targetAudience}
              </li>
              <li>
                <span className="text-purple-300">Total Scenes:</span> {scenes.length}
              </li>
              <li>
                <span className="text-purple-300">Duration:</span> {minutes}m {seconds}s
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-200 mb-2">🎨 Visual Style</h3>
            <p className="text-white text-sm leading-relaxed">{storyMetadata.visualStyle}</p>
          </div>
        </div>
      </div>

      {/* Themes */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">💫 Themes</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {storyMetadata.themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white/20 rounded-lg p-3 text-white text-sm font-medium"
            >
              {theme}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Music Suggestions */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">🎵 Music Suggestions</h3>
        <div className="space-y-4">
          {Object.entries(storyMetadata.musicSuggestions).map(([key, value]) => (
            <div key={key} className="bg-purple-900/30 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-purple-200 capitalize mb-2">{key}</h4>
              <p className="text-white text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Synopsis */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">📖 Story Synopsis</h3>
        <div className="text-white space-y-4 leading-relaxed">
          <p>
            <strong className="text-purple-300">Act 1 - Discovery (Scenes 1-7):</strong> Luna, a
            12-year-old girl, discovers she is a dreamweaver—someone who can enter and shape
            dreams. She meets Morpheus, the ancient guardian of the Dream Realm, who reveals that
            nightmares are spreading across the world. Luna begins training to protect dreamers
            from the corrupting influence of the Nightmare King.
          </p>
          <p>
            <strong className="text-purple-300">Act 2 - The Challenge (Scenes 8-13):</strong> Luna
            successfully saves her first dream, but must balance her secret life with her normal
            friendship with Stella. When Luna has a vision that the Nightmare King is targeting
            Stella, she prepares for a direct confrontation. The villain lures Luna into a trap
            within Stella's dream.
          </p>
          <p>
            <strong className="text-purple-300">Act 3 - Resolution (Scenes 14-20):</strong> Luna
            battles the Nightmare King in an epic confrontation, nearly losing until Stella breaks
            free and helps her. Together, with the power of friendship and belief, they banish the
            Nightmare King. Stella awakens with knowledge of Luna's secret, strengthening their
            bond. Luna embraces her role as protector of dreams while maintaining her life in the
            waking world.
          </p>
        </div>
      </div>

      {/* Scene Timeline */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">⏱️ Scene Timeline</h3>
        <div className="space-y-2">
          {scenes.map((scene, index) => {
            const startTime = scenes.slice(0, index).reduce((acc, s) => acc + s.duration, 0);
            const startMin = Math.floor(startTime / 60);
            const startSec = startTime % 60;
            const endTime = startTime + scene.duration;
            const endMin = Math.floor(endTime / 60);
            const endSec = endTime % 60;

            return (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-purple-900/30 rounded-lg p-3 flex justify-between items-center hover:bg-purple-900/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold text-lg w-8">{index + 1}</span>
                  <span className="text-white font-medium">{scene.title}</span>
                </div>
                <div className="text-purple-200 text-sm">
                  {startMin}:{startSec.toString().padStart(2, '0')} -{' '}
                  {endMin}:{endSec.toString().padStart(2, '0')} ({scene.duration}s)
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Production Notes */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-2 border-yellow-500/50">
        <h3 className="text-2xl font-bold text-yellow-200 mb-4">📋 Production Notes</h3>
        <div className="text-yellow-100 space-y-3">
          <p>
            <strong>Animation Style:</strong> This story is designed for 2D or 3D animation with a
            focus on vibrant colors and magical effects. The Dream Realm scenes should feel
            ethereal and fantastical, while waking world scenes are more grounded and realistic.
          </p>
          <p>
            <strong>AI Generation:</strong> Each scene includes detailed animation prompts
            optimized for AI image and video generation tools like Midjourney, DALL-E, Runway, or
            Pika. These prompts can be used directly to generate concept art or animatics.
          </p>
          <p>
            <strong>Voice Acting:</strong> The story requires 5 main voice actors plus additional
            voices for minor dream characters. Dialogue is kept concise to allow visual storytelling
            to take the lead.
          </p>
          <p>
            <strong>Runtime:</strong> At approximately 15 minutes, this story is perfect for a
            short film, series pilot, or anthology entry. Scenes can be adjusted in length during
            production while maintaining the narrative flow.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
