import React, { useEffect, useRef, useState } from 'react';
import { Twitter, Youtube, Instagram, ExternalLink, Users, Heart, MessageCircle } from 'lucide-react';

const Social = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialPlatforms = [
    {
      name: 'Twitter',
      handle: '@Lifelong_Earner',
      followers: '10K+',
      description: 'Daily insights on earning strategies and market trends',
      color: 'from-blue-400 to-blue-600',
      icon: Twitter,
      url: 'https://x.com/Lifelong_Earner'
    },
    {
      name: 'YouTube',
      handle: 'Lifelong Earner',
      followers: '50K+',
      description: 'In-depth tutorials and success stories',
      color: 'from-red-500 to-red-600',
      icon: Youtube,
      url: 'https://www.youtube.com/watch?v=kpF5N6JkiHU'
    },
    {
      name: 'Instagram',
      handle: '@lifelong.earner',
      followers: '25K+',
      description: 'Visual content and behind-the-scenes insights',
      color: 'from-pink-500 to-purple-600',
      icon: Instagram,
      url: 'https://www.instagram.com/lifelong.earner/'
    },
    {
      name: 'TikTok',
      handle: '@lifelongearner',
      followers: '100K+',
      description: 'Quick tips and trending earning strategies',
      color: 'from-gray-800 to-gray-900',
      icon: MessageCircle,
      url: 'https://www.tiktok.com/@lifelongearner'
    }
  ];

  const stats = [
    { label: 'Total Followers', value: '185K+', icon: Users },
    { label: 'Content Pieces', value: '500+', icon: MessageCircle },
    { label: 'Community Love', value: '50K+', icon: Heart }
  ];

  return (
    <section id="social" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the <span className="text-blue-600">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with me across all platforms for daily insights, exclusive content, 
            and a community of like-minded earners building their future.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${(index + 1) * 150} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
                onClick={() => window.open(platform.url, '_blank')}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-r ${platform.color} rounded-2xl p-4 group-hover:scale-110 transition-transform`}>
                    <platform.icon className="h-8 w-8 text-white" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{platform.handle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{platform.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{platform.followers}</span>
                  <span className="text-sm text-gray-500">followers</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linktree CTA */}
        <div className={`bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              All Links in One Place
            </h3>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Get instant access to all my content, resources, and social media platforms 
              through my Linktree page.
            </p>
            <button
              onClick={() => window.open('https://linktr.ee/lifelongearner', '_blank')}
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105"
            >
              Visit Linktree
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;