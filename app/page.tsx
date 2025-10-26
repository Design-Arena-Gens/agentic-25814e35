'use client';

import { useState } from 'react';
import { scenes, characters, storyMetadata } from './data/story';
import SceneViewer from './components/SceneViewer';
import CharacterPanel from './components/CharacterPanel';
import StoryOverview from './components/StoryOverview';

export default function Home() {
  const [currentView, setCurrentView] = useState<'overview' | 'scenes' | 'characters'>('overview');
  const [currentScene, setCurrentScene] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
            {storyMetadata.title}
          </h1>
          <p className="text-xl text-purple-200">
            A 15-Minute Animated Adventure • 20 Scenes
          </p>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentView('overview')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentView === 'overview'
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-purple-800 text-white hover:bg-purple-700'
            }`}
          >
            Story Overview
          </button>
          <button
            onClick={() => setCurrentView('scenes')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentView === 'scenes'
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-purple-800 text-white hover:bg-purple-700'
            }`}
          >
            View Scenes
          </button>
          <button
            onClick={() => setCurrentView('characters')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              currentView === 'characters'
                ? 'bg-white text-purple-900 shadow-lg scale-105'
                : 'bg-purple-800 text-white hover:bg-purple-700'
            }`}
          >
            Characters
          </button>
        </nav>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {currentView === 'overview' && <StoryOverview />}

          {currentView === 'scenes' && (
            <div>
              <SceneViewer
                scene={scenes[currentScene]}
                sceneNumber={currentScene + 1}
                totalScenes={scenes.length}
              />

              {/* Scene Navigation */}
              <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
                <button
                  onClick={() => setCurrentScene(Math.max(0, currentScene - 1))}
                  disabled={currentScene === 0}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all"
                >
                  ← Previous Scene
                </button>

                <span className="text-white font-semibold">
                  Scene {currentScene + 1} of {scenes.length}
                </span>

                <button
                  onClick={() => setCurrentScene(Math.min(scenes.length - 1, currentScene + 1))}
                  disabled={currentScene === scenes.length - 1}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all"
                >
                  Next Scene →
                </button>
              </div>

              {/* Scene Thumbnails */}
              <div className="mt-8 grid grid-cols-5 md:grid-cols-10 gap-2 max-w-6xl mx-auto">
                {scenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    onClick={() => setCurrentScene(index)}
                    className={`aspect-square rounded-lg font-bold text-sm transition-all ${
                      currentScene === index
                        ? 'bg-white text-purple-900 scale-110 shadow-lg'
                        : 'bg-purple-800 text-white hover:bg-purple-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentView === 'characters' && (
            <div className="grid md:grid-cols-2 gap-6">
              {characters.map((character) => (
                <CharacterPanel key={character.name} character={character} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-purple-200 text-sm">
          <p>© 2025 The Dreamweaver's Journey • An Original Animated Story</p>
          <p className="mt-2">Ready for production and storyboarding</p>
        </footer>
      </div>
    </main>
  );
}
