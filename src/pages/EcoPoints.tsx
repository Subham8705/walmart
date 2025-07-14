import React, { useState } from 'react';
import { Star, Trophy, Gift, TrendingUp, Award, Users } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const EcoPoints = () => {
  const [recyclesDone, setRecyclesDone] = useState(0); // Track progress
  const [rewardClaimed, setRewardClaimed] = useState(false); // Track claim status
  const { user } = useUser();

  const getTreeImage = () => {
    if (recyclesDone === 0) return '/tree_stage_3.png';
    if (recyclesDone === 1) return '/tree_stage_1.png';
    return '/tree_stage_2.png'; // Final stage
  };

  const handleRecycle = () => {
    if (recyclesDone < 3) {
      setRecyclesDone(prev => prev + 1);
      setRewardClaimed(false);
    }
  };

  const handleClaimReward = () => {
    alert("🎉 You've claimed 100 EcoPoints for Walmart products!");
    setRecyclesDone(0); // Reset tree
    setRewardClaimed(true);
  };

  const rewardItems = [
    { id: 1, name: 'Eco-Friendly Water Bottle', points: 500, image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?w=200', category: 'Lifestyle' },
    { id: 2, name: 'Bamboo Phone Case', points: 300, image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?w=200', category: 'Tech' },
    { id: 3, name: 'Organic Cotton T-Shirt', points: 800, image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?w=200', category: 'Clothing' },
    { id: 4, name: 'Solar Power Bank', points: 1200, image: 'https://images.pexels.com/photos/5466970/pexels-photo-5466970.jpeg?w=200', category: 'Tech' },
  
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Rivera', points: 4850, badge: '🏆' },
    { rank: 2, name: 'Sarah Chen', points: 2450, badge: '🥈' },
    { rank: 3, name: 'Michael Jones', points: 2100, badge: '🥉' },
    { rank: 4, name: 'Emma Davis', points: 1890, badge: '⭐' },
    { rank: 5, name: 'David Kim', points: 1650, badge: '⭐' }
  ];

  const achievements = [
    { title: 'First Scan', description: 'Completed your first AI scan', points: 50, unlocked: true },
    { title: 'Eco Warrior', description: 'Recycled 10 items', points: 200, unlocked: true },
    { title: 'Refurb Master', description: 'Refurbished 5 electronics', points: 300, unlocked: true },
    { title: 'Carbon Saver', description: 'Saved 10kg of CO₂', points: 500, unlocked: true }
  ];

  return (
    <>
      {/* EcoGrowth Tracker Section */}
      <div className="flex flex-col items-center justify-center p-6">

        <h1 className="text-4xl font-extrabold text-green-800 mb-6">🌱 EcoGrowth Tracker</h1>

        <div className="relative mb-6">
          <div className="w-48 h-48 rounded-full bg-yellow-200 shadow-inner flex items-center justify-center border-4 border-green-500 transition-transform hover:scale-105 duration-300">
            <img
              src={getTreeImage()}
              alt="Eco Tree"
              className="w-full h-full object-contain transition-all duration-500"
            />
          </div>
        </div>

        {recyclesDone < 3 ? (
          <button
            onClick={handleRecycle}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition-all"
          >
            ♻️ Recycle Item
          </button>
        ) : !rewardClaimed ? (
          <button
            onClick={handleClaimReward}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 mt-4 rounded-xl shadow-lg font-semibold transition-all"
          >
            🎁 Claim Reward
          </button>
        ) : (
          <p className="text-green-700 text-lg mt-4 font-medium">✅ Reward Claimed!</p>
        )}

        <p className="mt-6 text-gray-700 text-lg">
          Progress: <span className="font-bold">{recyclesDone} / 3</span>{' '}
          {recyclesDone < 3 ? "Keep going!" : rewardClaimed ? "🌳 Great job!" : "Ready to claim your reward!"}
        </p>
      </div>

      {/* EcoPoints Dashboard */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              EcoPoints Rewards
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Earn points for sustainable actions and redeem for eco-friendly rewards
            </p>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {user?.ecoPoints?.toLocaleString() || 0}
              </div>
              <div className="text-gray-600 dark:text-gray-300">EcoPoints</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {user?.co2Offset || 0}kg
              </div>
              <div className="text-gray-600 dark:text-gray-300">CO₂ Offset</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Trophy className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {user?.itemsRecycled || 0}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Items Recycled</div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <Users className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">#2</div>
              <div className="text-gray-600 dark:text-gray-300">Global Rank</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rewards Store */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Rewards Store
                </h2>
                <Gift className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rewardItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                      
                    />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {item.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.points}
                        </span>
                      </div>
                      <button 
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          (user?.ecoPoints ?? 0) >= item.points
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={(user?.ecoPoints ?? 0) < item.points}
                      >
                        {(user?.ecoPoints ?? 0) >= item.points ? 'Redeem' : 'Need More Points'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              {/* Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Achievements</h2>
                  <Award className="h-6 w-6 text-yellow-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        achievement.unlocked
                          ? 'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20'
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-semibold ${achievement.unlocked ? 'text-green-800 dark:text-green-300' : 'text-gray-600 dark:text-gray-400'}`}>
                          {achievement.title}
                        </h3>
                        {achievement.unlocked && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">+{achievement.points}</span>
                          </div>
                        )}
                      </div>
                      <p className={`text-sm ${achievement.unlocked ? 'text-green-700 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Leaderboard</h2>
                <Trophy className="h-6 w-6 text-yellow-500" />
              </div>

              <div className="space-y-4">
                {leaderboard.map((person) => (
                  <div
                    key={person.rank}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      person.name === user?.name
                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700'
                        : 'bg-gray-50 dark:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{person.badge}</span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{person.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Rank #{person.rank}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">{person.points.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-center">
                <h3 className="font-semibold mb-1">Weekly Challenge</h3>
                <p className="text-sm text-blue-100">Recycle 3 more items to earn 200 bonus points!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoPoints;
