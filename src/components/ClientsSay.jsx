import React from 'react';
import { Quote, Star } from 'lucide-react';

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

  const CompanyLogo = ({ company }) => (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      <span className="font-bold text-gray-900 text-lg tracking-wide">
        {company}
      </span>
    </div>
  );

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 ">
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