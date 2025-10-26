'use client';

import { Scene } from '../data/story';
import { motion } from 'framer-motion';

interface SceneViewerProps {
  scene: Scene;
  sceneNumber: number;
  totalScenes: number;
}

export default function SceneViewer({ scene, sceneNumber, totalScenes }: SceneViewerProps) {
  return (
    <motion.div
      key={scene.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
    >
      {/* Scene Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Scene {sceneNumber}: {scene.title}
            </h2>
            <div className="flex gap-4 text-purple-200">
              <span>⏱️ Duration: {scene.duration}s</span>
              <span>🎭 Mood: {scene.mood}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center">
              {sceneNumber}
            </div>
          </div>
        </div>
      </div>

      {/* Setting Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-purple-900/50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-200 mb-2">📍 Setting</h3>
          <p className="text-white">{scene.setting}</p>
          <p className="text-purple-300 text-sm mt-1">⏰ {scene.timeOfDay}</p>
        </div>
        <div className="bg-purple-900/50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-200 mb-2">👥 Characters</h3>
          <div className="flex flex-wrap gap-2">
            {scene.characters.map((character) => (
              <span
                key={character}
                className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
              >
                {character}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Description */}
      <div className="mb-6 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-3">🎨 Visual Description</h3>
        <p className="text-purple-100 leading-relaxed">{scene.visualDescription}</p>
      </div>

      {/* Action */}
      <div className="mb-6 bg-pink-900/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-3">🎬 Action</h3>
        <p className="text-purple-100 leading-relaxed">{scene.action}</p>
      </div>

      {/* Dialogue */}
      {scene.dialogue.length > 0 && (
        <div className="mb-6 bg-blue-900/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">💬 Dialogue</h3>
          <div className="space-y-3">
            {scene.dialogue.map((line, index) => (
              <div key={index} className="border-l-4 border-purple-400 pl-4">
                <p className="text-purple-300 font-semibold text-sm">{line.character}</p>
                <p className="text-white italic">&ldquo;{line.line}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Animation Prompt */}
      <div className="mb-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-6 border-2 border-yellow-500/50">
        <h3 className="text-xl font-semibold text-yellow-200 mb-3">
          ✨ Animation Prompt (For AI Image/Video Generation)
        </h3>
        <p className="text-yellow-100 leading-relaxed font-mono text-sm bg-black/30 p-4 rounded">
          {scene.animationPrompt}
        </p>
      </div>

      {/* Camera Movement */}
      <div className="bg-purple-900/50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-3">🎥 Camera Movement</h3>
        <p className="text-purple-100 leading-relaxed">{scene.cameraMovement}</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="bg-purple-900/50 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(sceneNumber / totalScenes) * 100}%` }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full"
          />
        </div>
        <p className="text-purple-200 text-sm text-center mt-2">
          Story Progress: {sceneNumber} of {totalScenes} scenes
        </p>
      </div>
    </motion.div>
  );
}
