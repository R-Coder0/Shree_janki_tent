import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';
import Tent1 from '../../assets/Blogs/blogs1.jpg';
import Tent2 from '../../assets/Blogs/blogs2.jpg';
import Tent3 from '../../assets/Blogs/blogs3.jpg';
import Testimonials from '../Testimonial/Testimonials';
import aboutiamge from '../../assets/Gallery/pic3.jpg'
import './Home.css';
import Modal from './Modal';
import EnquiryForm from '../Pages/Enquiry'; 
import TentRentalImage from '../../assets/Gallery/pic4.jpg'
import EventPlanningImage from '../../assets/Gallery/pic7.jpg'
import CateringImage from '../../assets/Gallery/cateringservice.jpg'
import './Modal'

const Services = () => {
  const services = [
    {
      title: 'Tent Rentals',
      description: 'Explore a wide range of tents available for various events.',
      image: TentRentalImage, // Use an actual image path
    },
    {
      title: 'Event Planning',
      description: 'Let us help you plan your event with our expert guidance.',
      image: EventPlanningImage, // Use an actual image path
    },
    {
      title: 'Catering Services',
      description: 'Get professional catering services for all types of events.',
      image: CateringImage, // Use an actual image path
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (

<section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="service"
              onClick={() => openModal(service)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ✖
            </button>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            {/* Here we include the EnquiryForm component */}
            <EnquiryForm service={selectedService.title} closeForm={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

// About Us Section
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>At Shree Janki Tent, we are passionate about making your events unforgettable. With years of experience in tent rentals, event planning, and catering services, we are dedicated to providing top-quality services that meet your specific needs. Trust us to handle every detail of your event with professionalism and care.</p>
            
            <h3 style={{color:'#fff', fontSize:'2rem'}}>Our Mission</h3>
            <p>Our mission is to provide exceptional event solutions that exceed our clients' expectations. We strive to create memorable experiences by offering customized services tailored to your specific needs, ensuring that every event we touch is a success.</p>
          </div>
          <div className="about-image">
            <img
              src={aboutiamge}
              alt="About Us"
              className="responsive-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Call to Action (CTA) Section
const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Change '/contact' to the actual path of your contact page
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Ready to make your event a success?</h2>
        <button onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

// Blog Preview Section
const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Top Tent Rental Tips for 2024",
      content:
        "Learn the key considerations for renting tents in 2024. From choosing the right size to selecting the perfect location, discover how to ensure your event goes off without a hitch.",
      image: Tent1, // Ensure images are relevant to the content
    },
    {
      title: "Event Planning Essentials",
      content:
        "Planning an event can be overwhelming. Get expert tips on how to streamline the process and ensure everything runs smoothly, from the initial planning stages to the day of the event.",
      image: Tent2,
    },
    {
      title: "Catering Ideas for Outdoor Events",
      content:
        "Discover creative catering ideas that are perfect for outdoor events. Whether you're hosting a wedding, corporate event, or family gathering, find the inspiration you need to wow your guests.",
      image: Tent3,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="blog-preview">
      <div className="container">
        <h2>Insights from Shree Janki Tent</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-post"
              onClick={() => openModal(post)}
            >
              <div className="image-card">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="description-card">
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 120)}...</p> {/* Show an excerpt */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && <Modal post={selectedPost} closeModal={closeModal} />}
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutUs />
      <CallToAction />
      <BlogPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
