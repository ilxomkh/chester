import React from 'react';
import { Quote } from 'lucide-react';

const ClientsSay = () => {
  const testimonials = [
    {
      text: "Partnering with Chester Frontline has revolutionized our customer engagement. Their skilled agents have seamlessly integrated with our systems, enhancing our sales and client interactions.",
      author: "Siddikov Mukhammad",
      position: "Head of Sales",
      company: "360LAB"
    },
    {
      text: "Chester Frontline's professionalism and dedication have been pivotal. Their effective communication with our clients has driven our success.",
      author: "Anna Mukhina",
      position: "Operations Director",
      company: "360LAB"
    },
    {
      text: "Collaborating with Chester Frontline has been a rewarding experience. Their focus on quality and transparency supports our growth strategy.",
      author: "Munisa Artikzhanova",
      position: "Chief Executive Officer",
      company: "360LAB"
    },
    {
      text: "The team's alignment with our business needs is exceptional. Their proactive customer support has strengthened our client relationships.",
      author: "Saed Sultanov",
      position: "Customer Success Manager",
      company: "360LAB"
    }
  ];

  const ChesterFrontlineLogo = () => (
    <div className="flex items-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="120" 
        height="24" 
        viewBox="0 0 162 27" 
        fill="none"
        className="text-gray-700"
      >
        <g filter="url(#filter0_b_1136_3728)">
          <g clipPath="url(#clip0_1136_3728)">
            <path d="M13.7245 0.551758C11.1089 0.551758 8.55212 1.32736 6.37736 2.78049C4.20261 4.23361 2.50759 6.299 1.50666 8.71545C0.50573 11.1319 0.243841 13.7909 0.754111 16.3562C1.26438 18.9215 2.52389 21.2779 4.37337 23.1274C6.22285 24.9769 8.57923 26.2364 11.1445 26.7466C13.7098 27.2569 16.3688 26.995 18.7853 25.9941C21.2017 24.9932 23.2671 23.2981 24.7203 21.1234C26.1734 18.9486 26.949 16.3918 26.949 13.7762C26.949 10.2689 25.5557 6.90519 23.0756 4.42512C20.5955 1.94505 17.2318 0.551758 13.7245 0.551758ZM13.7245 23.6946C11.7628 23.6946 9.84521 23.1129 8.21415 22.0231C6.58308 20.9332 5.31182 19.3842 4.56112 17.5718C3.81042 15.7595 3.614 13.7652 3.99671 11.8413C4.37941 9.9173 5.32404 8.15001 6.71115 6.7629C8.09826 5.37579 9.86554 4.43116 11.7895 4.04846C13.7135 3.66576 15.7077 3.86217 17.5201 4.61287C19.3324 5.36357 20.8815 6.63483 21.9713 8.2659C23.0612 9.89697 23.6429 11.8146 23.6429 13.7762C23.6399 16.4059 22.594 18.9269 20.7346 20.7864C18.8752 22.6458 16.3541 23.6917 13.7245 23.6946Z" fill="currentColor"></path>
            <path d="M13.7245 15.9804C14.9418 15.9804 15.9286 14.9936 15.9286 13.7763C15.9286 12.5591 14.9418 11.5723 13.7245 11.5723C12.5072 11.5723 11.5204 12.5591 11.5204 13.7763C11.5204 14.9936 12.5072 15.9804 13.7245 15.9804Z" fill="currentColor"></path>
            <path d="M13.7245 6.0625C12.1988 6.0625 10.7073 6.51494 9.43867 7.36259C8.17006 8.21025 7.1813 9.41505 6.59742 10.8247C6.01355 12.2343 5.86078 13.7853 6.15844 15.2818C6.45609 16.7782 7.19081 18.1527 8.26967 19.2316C9.34853 20.3105 10.7231 21.0452 12.2195 21.3428C13.7159 21.6405 15.267 21.4877 16.6766 20.9039C18.0862 20.32 19.291 19.3312 20.1387 18.0626C20.9863 16.794 21.4388 15.3025 21.4388 13.7768C21.4364 11.7315 20.6229 9.77074 19.1767 8.32454C17.7305 6.87834 15.7697 6.06483 13.7245 6.0625ZM13.7245 18.1849C12.8526 18.1849 12.0004 17.9264 11.2754 17.442C10.5505 16.9577 9.98552 16.2692 9.65188 15.4637C9.31824 14.6582 9.23094 13.7719 9.40103 12.9168C9.57112 12.0617 9.99096 11.2762 10.6075 10.6597C11.2239 10.0433 12.0094 9.62341 12.8645 9.45332C13.7196 9.28323 14.6059 9.37053 15.4114 9.70417C16.2169 10.0378 16.9054 10.6028 17.3897 11.3277C17.8741 12.0527 18.1327 12.9049 18.1327 13.7768C18.1327 14.9459 17.6682 16.0671 16.8415 16.8938C16.0148 17.7205 14.8936 18.1849 13.7245 18.1849Z" fill="currentColor"></path>
          </g>
          <path d="M53.2481 21.5782H47.7731V18.4572H52.9307V15.442H47.7731V12.4533H52.9307V9.33233H47.7731V6.31714H53.2481L56.2633 8.14212V12.6649L53.7771 13.9345L56.2633 15.1247V19.7532L53.2481 21.5782ZM41.3196 16.6322V18.4572H46.4771V21.5782H41.0022L37.8812 19.7532V16.6322H41.3196ZM37.987 11.1573V8.14212L41.0022 6.31714H46.4771V9.33233H41.3196V11.1573H37.987ZM46.4771 15.442H43.1446V12.4533H46.4771V15.442ZM75.7547 19.7003L72.766 21.5253H67.291V18.4308H72.5544V15.442H67.291V12.4269H72.766L75.7547 14.2518V19.7003ZM72.4486 11.1573V9.30588H67.291V6.31714H72.766L75.7547 8.14212V11.1573H72.4486ZM57.5578 8.14212L60.5466 6.31714H66.0215V9.30588H60.8639V12.4269H66.0215V15.442H60.8639V18.4308H66.0215V21.5253H60.8639L57.5578 19.7003V8.14212ZM96.9842 8.16857V19.7268L93.969 21.5518H88.3618V18.5366H93.6516V10.2316L88.3618 15.8388V11.2102L89.9752 9.35878H88.4676V6.34359H93.6516L96.9842 8.16857ZM81.9876 17.6638L87.1716 12.1624V16.7116L85.664 18.5366H87.1716V21.5518H83.4952H81.6702L78.655 19.7268V8.16857L81.9876 6.34359H87.1716V9.35878H81.9876V17.6638ZM100.41 6.34359H103.743V18.4572H108.768V21.5518H100.41V6.34359ZM110.17 18.4572V21.5518H118.634V18.4572H110.17ZM119.687 8.16857V21.5518H123.02V15.4685H128.151V12.4533H123.02V9.33233H128.151V6.34359H122.702L119.687 8.16857ZM137.91 8.16857V21.5518H134.578V15.4685H129.341V12.4533H134.578V9.33233H129.341V6.34359H134.789L137.91 8.16857ZM141.339 6.34359H149.803V9.33233H144.672V12.4533H149.803V15.4685H144.672V18.4572H149.803V21.5518H141.339V6.34359ZM159.562 19.7532V15.1247L157.076 13.9609L159.562 12.7707V8.16857L156.574 6.34359H151.099V9.33233H156.23V12.4533H151.099V15.4685H156.23V18.4572H151.099V21.5518H156.574L159.562 19.7532Z" fill="currentColor"></path>
        </g>
        <defs>
          <filter id="filter0_b_1136_3728" x="-3.5" y="-3.44824" width="169.265" height="34.4492" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1136_3728"></feComposite>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1136_3728" result="shape"></feBlend>
          </filter>
          <clipPath id="clip0_1136_3728">
            <rect width="26.449" height="26.449" fill="currentColor" transform="translate(0.5 0.551758)"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  const CompanyLogo = ({ company }) => {
    if (company === "360LAB") {
      return <ChesterFrontlineLogo />;
    }
    
    // Fallback для других компаний
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <span className="font-bold text-gray-900 text-lg tracking-wide">
          {company}
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-normal">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>

                {/* Company Logo */}
                <CompanyLogo company={testimonial.company} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Trusted by leading companies
            </h3>
            <p className="text-gray-600 text-lg">
              Join hundreds of satisfied clients who trust us with their success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSay;