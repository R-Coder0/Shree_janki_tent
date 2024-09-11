import React, { useState } from "react";
import "./ServicePage.css";
import waterproofTent from "../../assets/Services/service1.webp"; // Example image paths, replace with actual images
import bandelTheme from '../../assets/Services/services2.webp';
import haldiTheme from '../../assets/Services/service3.webp';
import mehandiTheme from '../../assets/Services/service4.webp';
import homeDecor from '../../assets/Services/service5.webp';
import corporateEvents from '../../assets/Services/service6.webp';
import birthdayParty from '../../assets/Services/service7.webp';
import schoolFunctions from '../../assets/Services/service8.webp';
import religiousEvents from '../../assets/Services/service9.webp';
import collegeFests from '../../assets/Services/service10.webp';
import vegCatering from '../../assets/Services/service11.webp';
import photographyStudio from '../../assets/Services/service12.webp';

import EnquiryForm from "./Enquiry";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Waterproof Tent Services",
      description:
        "Rain or shine, your event will be perfect with our waterproof tents! Shree Jaki Tent & Decorator Garg Caterers ensures your celebrations go on without a hitch, no matter the weather. ☔✨",
      image: waterproofTent,
    },
    {
      id: 2,
      title: "Bandel Theme Base Tent",
      description:
        "Create a magical atmosphere with our Bandel Theme Base Tents. Shree Jaki Tent & Decorator Garg Caterers brings your dream themes to life with stunning decor and unique setups. 🌟",
      image: bandelTheme,
    },
    {
      id: 3,
      title: "Haldi Theme Decorations",
      description:
        "Brighten up your Haldi ceremony with vibrant decorations from Shree Jaki Tent & Decorator Garg Caterers. Let us add that splash of color to your special day! 🌼💛",
      image: haldiTheme,
    },
    {
      id: 4,
      title: "Mehandi Theme Decor",
      description:
        "Make your Mehandi night unforgettable with our elegant and intricate decor. Shree Jaki Tent & Decorator Garg Caterers creates a mesmerizing setup for your beautiful moments. 🌿💚",
      image: mehandiTheme,
    },
    {
      id: 5,
      title: "Home Decor for Events",
      description:
        "Hosting an event at home? Shree Jaki Tent & Decorator Garg Caterers offers exquisite home decor services to make your celebrations extraordinary. 🏡✨",
      image: homeDecor,
    },
    {
      id: 6,
      title: "Corporate Events",
      description:
        "Planning a corporate event? Shree Jaki Tent & Decorator Garg Caterers provides professional and stylish event planning and decor services to impress your guests. 🏢🎉",
      image: corporateEvents,
    },
    {
      id: 7,
      title: "Birthday Party Planner",
      description:
        "Make your birthday celebrations magical with Shree Jaki Tent & Decorator Garg Caterers. From themed decor to delicious catering, we handle it all! 🎂🎈",
      image: birthdayParty,
    },
    {
      id: 8,
      title: "School Functions",
      description:
        "Shree Jaki Tent & Decorator Garg Caterers brings excitement to school functions with creative decor and seamless event planning. Let us make your school event a success! 📚🏫",
      image: schoolFunctions,
    },
    {
      id: 9,
      title: "Religious Events",
      description:
        "Celebrate your religious events with grace and elegance. Shree Jaki Tent & Decorator Garg Caterers offers beautiful decor and professional services for all religious occasions. 🕌🕍",
      image: religiousEvents,
    },
    {
      id: 10,
      title: "College Fests",
      description:
        "Turn your college fest into an unforgettable event with Shree Jaki Tent & Decorator Garg Caterers. We provide vibrant decor and top-notch planning for a memorable celebration. 🎓🎉",
      image: collegeFests,
    },
    {
      id: 11,
      title: "Pure Veg Catering",
      description:
        "Delight your guests with our pure veg catering services. Shree Jaki Tent & Decorator Garg Caterers offers a delectable menu that will satisfy every palate. 🍲🥗",
      image: vegCatering,
    },
    {
      id: 12,
      title: "Photography & Studio",
      description:
        "Capture every precious moment with Shree Jaki Tent & Decorator Garg Caterers' photography and studio services. We ensure your memories are beautifully preserved. 📸✨",
      image: photographyStudio,
    },
  ];

  const openForm = (service) => {
    setSelectedService(service);
  };

  const closeForm = () => {
    setSelectedService(null);
  };

  return (
    <div className="service-page">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Exceptional Event Services for Every Occasion
          </h1>
          <p className="hero-description">
            From waterproof tents to elegant event decor, Shree Janki Tent &
            Decorator Garg Caterers offers a wide range of services to make your
            events unforgettable.
          </p>
        </div>
      </div>

      <h1 className="service-page-title">
        Our Services at Shree Janki Tent
      </h1>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-item-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-item-content">
              <h2 className="service-item-title">{service.title}</h2>
              <p className="service-item-description">{service.description}</p>
              <button
                className="service-item-button"
                onClick={() => openForm(service.title)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedService && (
        <EnquiryForm service={selectedService} closeForm={closeForm} />
      )}
    </div>
  );
};

export default ServicePage;
