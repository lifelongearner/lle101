import React, { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink, BookOpen, Video, FileText, Podcast } from 'lucide-react';

const Content = () => {
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

  const contentTypes = [
    {
      icon: Video,
      title: 'Video Content',
      description: 'In-depth tutorials and market analysis',
      color: 'from-red-500 to-red-600',
      link: 'https://www.youtube.com/watch?v=kpF5N6JkiHU'
    },
    {
      icon: FileText,
      title: 'Written Guides',
      description: 'Comprehensive earning strategies',
      color: 'from-blue-500 to-blue-600',
      link: '#'
    },
    {
      icon: Podcast,
      title: 'Audio Content',
      description: 'Interviews with successful earners',
      color: 'from-purple-500 to-purple-600',
      link: '#'
    },
    {
      icon: BookOpen,
      title: 'Case Studies',
      description: 'Real success stories analyzed',
      color: 'from-green-500 to-green-600',
      link: '#'
    }
  ];

  const featuredContent = [
    {
      title: 'Building Multiple Income Streams in 2024',
      description: 'Learn how to diversify your income and create financial stability through proven methods.',
      thumbnail: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Video',
      duration: '15 min'
    },
    {
      title: 'The Creator Economy Blueprint',
      description: 'Turn your skills and knowledge into a profitable online business.',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Guide',
      duration: '10 min read'
    },
    {
      title: 'Investment Strategies for Beginners',
      description: 'Start investing smart with these beginner-friendly strategies and tips.',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Video',
      duration: '20 min'
    }
  ];

  return (
    <section id="content" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="text-blue-600">Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access high-quality content designed to accelerate your earning potential 
            and build lasting financial success.
          </p>
        </div>

        {/* Content Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentTypes.map((type, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
                   onClick={() => window.open(type.link, '_blank')}>
                <div className={`bg-gradient-to-r ${type.color} rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <type.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs rounded-full mb-2">
                      {content.type}
                    </span>
                    <div className="text-white text-sm">{content.duration}</div>
                  </div>
                  {content.type === 'Video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{content.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button
            onClick={() => window.open('https://www.youtube.com/watch?v=kpF5N6JkiHU', '_blank')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            View All Content
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;