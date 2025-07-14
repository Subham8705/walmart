import React from 'react';
import { Users, Target, Globe, Award, Heart, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=300',
      bio: 'Former sustainability director with 10+ years in circular economy initiatives.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=300',
      bio: 'AI specialist with expertise in logistics optimization and machine learning.'
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Head of Sustainability',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?w=300',
      bio: 'Environmental scientist focused on lifecycle assessment and impact measurement.'
    },
    {
      name: 'Alex Kim',
      role: 'VP of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=300',
      bio: 'Logistics expert with experience scaling reverse supply chain operations.'
    }
  ];

  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Environmental Impact',
      description: 'Every decision we make is guided by its potential to reduce waste and carbon emissions.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'Building solutions that benefit all stakeholders in the circular economy ecosystem.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to solve complex sustainability challenges.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Transparency',
      description: 'Open, honest communication about our processes, impact, and continuous improvement.'
    }
  ];

  const milestones = [
    { year: '2023', event: 'EcoLoop founded with $2M seed funding' },
    { year: '2023', event: 'First AI-powered product classification system launched' },
    { year: '2024', event: 'Reached 100,000 items processed milestone' },
    { year: '2024', event: 'Expanded to 5 major metropolitan areas' },
    { year: '2024', event: 'Launched enterprise business portal' },
    { year: '2025', event: 'Achieved carbon neutral operations' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionizing the{' '}
            <span className="text-yellow-400">Circular Economy</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We're on a mission to eliminate waste by creating the world's most efficient 
            reverse logistics platform, connecting every return to its perfect next life.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To transform how the world handles product returns by creating an intelligent, 
                sustainable reverse logistics ecosystem that maximizes value recovery while 
                minimizing environmental impact. Every item deserves a second chance, and 
                every action should contribute to a healthier planet.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                The Problem We're Solving
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Returns sent to landfills</span>
                  <span className="font-bold text-red-600 dark:text-red-400">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">CO₂ from inefficient logistics</span>
                  <span className="font-bold text-red-600 dark:text-red-400">2.1B tons</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Value lost annually</span>
                  <span className="font-bold text-red-600 dark:text-red-400">$760B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision and innovation at EcoLoop
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate experts united by our commitment to sustainable innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in building the future of reverse logistics
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-blue-300 dark:bg-blue-600"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center space-x-6">
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {milestone.year}
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {milestone.event}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're an individual looking to make a difference or a business 
            ready to embrace sustainable practices, we'd love to have you on board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;