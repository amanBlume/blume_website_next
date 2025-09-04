import React from 'react';

const channels = [
  {
    name: 'Google My Business',
    category: 'Dominate Google Searches',
    description: 'Be discoverable when patients search on Google. GMB boosts your SEO, allows easy updates to business info, and collects reviews that build trust and credibility.',
    logo: 'https://via.placeholder.com/60x60/4285F4/FFFFFF?text=G',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    name: 'Nextdoor',
    category: 'Neighborhood Patient Reach',
    description: 'Connect with patients in your local neighborhood. Nextdoor listings increase visibility among nearby residents seeking trusted healthcare providers.',
    logo: 'https://via.placeholder.com/60x60/00D665/FFFFFF?text=N',
    color: 'bg-green-50 border-green-200'
  },
  {
    name: 'WebMD',
    category: 'Trusted Health Platform',
    description: 'Build authority on one of the most visited health websites. A WebMD profile enhances credibility and positions you as a go-to expert in your specialty.',
    logo: 'https://via.placeholder.com/60x60/0078D4/FFFFFF?text=W',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    name: 'Apple Maps',
    category: 'Reach iPhone Users',
    description: 'Get your clinic found by millions using Apple Maps. With tight integration into iOS devices, it\'s essential for increasing walk-ins and mobile discoverability.',
    logo: 'https://via.placeholder.com/60x60/000000/FFFFFF?text=🍎',
    color: 'bg-gray-50 border-gray-200'
  },
  {
    name: 'Psychology Today',
    category: 'Premier Therapist Directory',
    description: 'The most widely used directory for mental health professionals. Helps you attract more clients and boost your credibility with a verified profile.',
    logo: 'https://via.placeholder.com/60x60/4A90E2/FFFFFF?text=PT',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    name: 'CounselWatch',
    category: 'Smart Client Matching',
    description: 'Connects you with clients based on therapy style and values. A great fit for therapists focused on strong therapeutic alignment.',
    logo: 'https://via.placeholder.com/60x60/FF6B35/FFFFFF?text=CW',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    name: 'GoodTherapy',
    category: 'Ethical Care Platform',
    description: 'Known for promoting safe, evidence-based therapy. Attract clients who value professional standards and compassionate care.',
    logo: 'https://via.placeholder.com/60x60/8BC34A/FFFFFF?text=GT',
    color: 'bg-green-50 border-green-200'
  },
  {
    name: 'Therapist.com',
    category: 'Verified Provider Listings',
    description: 'A modern directory backed by trusted health brands. Therapist.com helps clients find licensed professionals with ease.',
    logo: 'https://via.placeholder.com/60x60/9C27B0/FFFFFF?text=T',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    name: 'TherapyTribe',
    category: 'Supportive Therapy Network',
    description: 'Combines a therapist directory with a mental health community. Ideal for connecting with clients seeking active support.',
    logo: 'https://via.placeholder.com/60x60/4ECDC4/FFFFFF?text=TT',
    color: 'bg-teal-50 border-teal-200'
  },
  {
    name: 'Vitals',
    category: 'Trusted Doctor Reviews',
    description: 'A healthcare directory where patients leave verified reviews. Improves visibility and builds trust with potential clients.',
    logo: 'https://via.placeholder.com/60x60/6B46C1/FFFFFF?text=V',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    name: 'Bing Places',
    category: 'Wider Search Visibility',
    description: 'Reach users who prefer Bing search. Having a complete Bing listing strengthens your digital presence across multiple search engines and improves accessibility.',
    logo: 'https://via.placeholder.com/60x60/0078D4/FFFFFF?text=B',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    name: 'TherapyDen',
    category: 'Inclusive Therapy Network',
    description: 'A progressive therapy directory tailored to inclusivity and niche communities. Ideal for mental health professionals seeking values-aligned clients.',
    logo: 'https://via.placeholder.com/60x60/10B981/FFFFFF?text=TD',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    name: 'RateMDs',
    category: 'Reputation Through Ratings',
    description: 'Let patients rate and review your care on a highly visited provider review site. Strong ratings help build trust and encourage referrals.',
    logo: 'https://via.placeholder.com/60x60/059669/FFFFFF?text=R',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    name: 'Doctor.com',
    category: 'Multi-Platform Listings',
    description: 'List your practice on a trusted healthcare marketing network. Doctor.com powers listings on multiple health-related sites, expanding your reach automatically.',
    logo: 'https://via.placeholder.com/60x60/0EA5E9/FFFFFF?text=D',
    color: 'bg-sky-50 border-sky-200'
  },
  {
    name: 'Health Hub',
    category: 'Culturally Aligned Care',
    description: 'Connect with a diverse seeking culturally competent care. This directory emphasizes health equity and is vital for inclusive practitioners.',
    logo: 'https://via.placeholder.com/60x60/EC4899/FFFFFF?text=HH',
    color: 'bg-pink-50 border-pink-200'
  },
  {
    name: 'FindATopDoc',
    category: 'Build Your Authority',
    description: 'Boost your reputation on a trusted provider search site. Verified profiles and patient reviews make it easier for patients to choose you.',
    logo: 'https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=FD',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    name: 'Healthgrades',
    category: 'Local Reviews Power',
    description: 'Leverage Yelp\'s massive local traffic and reviews system. Positive testimonials here help potential patients feel confident in choosing your practice.',
    logo: 'https://via.placeholder.com/60x60/1E40AF/FFFFFF?text=HG',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    name: 'My Local Services',
    category: 'Local Business Discovery',
    description: 'Improve your visibility by appearing on this widely used local business directory. Great for increasing foot traffic and regional visibility.',
    logo: 'https://via.placeholder.com/60x60/16A34A/FFFFFF?text=MLS',
    color: 'bg-green-50 border-green-200'
  },
  {
    name: 'MediFind',
    category: 'Condition-Based Matching',
    description: 'Help patients find specialists based on their specific conditions. MediFind\'s specialized provider-matching system brings you qualified outcomes.',
    logo: 'https://via.placeholder.com/60x60/6366F1/FFFFFF?text=MF',
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    name: 'Google Maps',
    category: 'Accurate Location Access',
    description: 'Ensure accurate and optimized listings on Google Maps so patients can easily locate and navigate to your clinic.',
    logo: 'https://via.placeholder.com/60x60/34A853/FFFFFF?text=GM',
    color: 'bg-green-50 border-green-200'
  },
  {
    name: 'Hotfrog',
    category: 'Regional Web Presence',
    description: 'Expand your online presence with Hotfrog\'s business directory, helping new patients find you when browsing for services in your area.',
    logo: 'https://via.placeholder.com/60x60/F97316/FFFFFF?text=HF',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    name: 'Healthline',
    category: 'Health Info Alignment',
    description: 'Connect your practice with the top health information platform. A Healthline profile aligns your practice with trustworthy medical content.',
    logo: 'https://via.placeholder.com/60x60/0891B2/FFFFFF?text=HL',
    color: 'bg-cyan-50 border-cyan-200'
  },
  {
    name: 'Sharecare',
    category: 'Whole-Person Wellness',
    description: 'Showcase your services on this holistic health and wellness platform, used by patients to find providers focused on long-term well-being.',
    logo: 'https://via.placeholder.com/60x60/06B6D4/FFFFFF?text=SC',
    color: 'bg-cyan-50 border-cyan-200'
  },
  {
    name: 'Yellow Pages',
    category: 'Classic Directory Power',
    description: 'Still a go-to for many online users, Yellow Pages listings support both local discovery and higher search engine rankings.',
    logo: 'https://via.placeholder.com/60x60/EAB308/FFFFFF?text=YP',
    color: 'bg-yellow-50 border-yellow-200'
  }
];

const ChannelsGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Channels
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channels.map((channel, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${channel.color} group`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-coral-400 to-coral-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {channel.name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-coral-600 transition-colors duration-300">
                    {channel.name}
                  </h3>
                  <p className="text-sm font-semibold text-coral-600 mb-3 uppercase tracking-wide">
                    {channel.category}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {channel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsGrid;