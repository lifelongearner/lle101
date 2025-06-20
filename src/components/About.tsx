import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, TrendingUp, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Stay ahead with the latest earning strategies, market insights, and skill development.'
    },
    {
      icon: TrendingUp,
      title: 'Multiple Income Streams',
      description: 'Diversify your earnings through proven methods: content creation, investments, and side hustles.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a network of like-minded individuals sharing knowledge and opportunities.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Learn from real success stories and actionable strategies that deliver results.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Strategies',
      description: 'Discover cutting-edge earning opportunities in the digital economy.'
    },
    {
      icon: Target,
      title: 'Goal Achievement',
      description: 'Set and reach your financial goals with structured guidance and accountability.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lifelong Earner is more than just a brand—it's a philosophy of continuous growth, 
            smart earning, and building sustainable wealth through knowledge and action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of people who have already started their journey to financial independence. 
              The best time to start was yesterday. The second best time is now.
            </p>
            <button
              onClick={() => document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Start Your Journey
              <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;