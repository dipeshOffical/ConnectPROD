import React from "react";
import Button from "../../components/Button";  // Custom button component
import Heading from "../../components/Heading"; // Custom heading component
import Service from "../../components/Service"; // Custom service card component
import Wrapper from "../../components/Wrapper"; // Custom wrapper component
import { services } from "../../static-data"; // Static data for services
import { Link } from "react-router-dom"; // Router Link for navigation
import "./Services.css"; // Import the CSS file for hover effect

const Services = ({ explore }) => {
  return (
    <Wrapper className="lg:mt-28 mt-20">
      <div className="text-center">
        {/* Heading Component */}
        <Heading title="What We Offer You" />

        {/* Description */}
        <div className="text-color-black mt-6">
          <p>
            Australia offers world-class education with diverse academic
            choices, but selecting the right college can be challenging. Connect
            Australian Education and Visa Services makes it easy. Partnered with
            top institutions, we guide you through every step—from admission to
            documentation—for a smooth and tailored educational journey.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-10">
          {services.map((service, index) => {
            return (
              <div className="service-card" key={index}>
                {/* Service Image with background and hover effect */}
                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
                  {/* Service Overlay with title and description */}
                  <div className="service-overlay">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conditional Explore Button */}
        {explore === 0 || (
          <div className="mt-16">
            <Link to="/service">
              <button className="animated-button">
                Explore All Services
                <span className="arrow-icon"></span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Services;
