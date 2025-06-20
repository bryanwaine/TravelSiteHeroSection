/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  ChevronLeft,
  ChevronRight,
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
} from "lucide-react";

import { useSwipeable } from "react-swipeable";

import { LatLngTuple } from "leaflet";

// Optional: fix default icon issue in some setups
import "leaflet/dist/leaflet.css";

// Only load on client
const TravelMap = dynamic(() => import("./TravelMap"), {
  ssr: false,
});

interface Destination {
  id: number;
  name: string;
  country: string;
  price: number;
  duration: string;
  image: string;
  video: string;
  position: LatLngTuple;
  direction: string;
  description: string;
  highlights: string[];
  temperature: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    price: 2499,
    duration: "7 days",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
    video:
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SEcSCp_lol7ukts6n/videoblocks-emerald-pool-water-with-moonlight-reflection-at-empty-pool-deck-chairs-002_hwt3zs2yn__108247d4da72f36ba2b01f748cc0a2e3__P360.mp4",
    position: [36.3932, 25.4615],
    direction: "bottom",
    description: "Experience the magical sunsets and white-washed buildings",
    highlights: ["Sunset Views", "Wine Tasting", "Beach Activities"],
    temperature: 28,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    price: 1899,
    duration: "10 days",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    video:
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/GTYSdDW/tropical-maldives-beach-vacation-concept_vyursn3xl__fa26099cdcda0e6979b9d9e5cdb5524a__P360.mp4",
    position: [-8.3405, 115.092],
    direction: "top",
    description: "Discover temples, rice terraces, and pristine beaches",
    highlights: ["Temple Tours", "Ocean Surfing", "Rice Terraces"],
    temperature: 31,
  },
  {
    id: 3,
    name: "Machu Picchu",
    country: "Peru",
    price: 3299,
    duration: "5 days",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
    video:
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B3pWIDoVol9ur6byn/videoblocks-6426c7fb1831477418d6cb90_bedbokhzn__2a444d97951ea9c23f5511004caed0e8__P360.mp4",
    position: [-13.1631, -72.545],
    direction: "top",
    description: "Trek to the ancient Incan citadel in the clouds",
    highlights: ["Inca Trail", "Historical Sites", "Mountain Views"],
    temperature: 18,
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    price: 2799,
    duration: "8 days",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    video:
      "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SYU8Luct1gm72azzir/japandrone46-3d83x8yts8__6e6c903dcdcb7fc66a392b77747fc99e__P360.mp4",
    position: [35.6895, 139.6917],
    direction: "bottom",
    description: "Blend of ancient traditions and futuristic technology",
    highlights: ["Cherry Blossoms", "Tech Districts", "Traditional Cuisine"],
    temperature: 22,
  },
];


const weatherTypes = ["sunny", "cloudy", "rainy", "windy"] as const;
type WeatherType = (typeof weatherTypes)[number];

const TravelHeroSection: React.FC = () => {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [weather, setWeather] = useState<WeatherType>("sunny");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayBookingSummary, setDisplayBookingSummary] = useState(true);
  const [displayPaymentForm, setDisplayPaymentForm] = useState(false);
  const [displayBookingForm, setDisplayBookingForm] = useState(false);
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    fullName: "",
    email: "",
  });
  const [cardFormData, setCardFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });
  const [mobileBookingVisible, setMobileBookingVisible] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [cardErrors, setCardErrors] = useState<{ [key: string]: string }>({});

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Random weather
    const weatherInterval = setInterval(() => {
      setWeather(weatherTypes[Math.floor(Math.random() * weatherTypes.length)]);
    }, 10000);

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(weatherInterval);
      observer.disconnect();
    };
  }, []);

  const nextDestination = () => {
    if (destinations.length === 0) return;
    setCurrentMobileIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    if (destinations.length === 0) return;
    setCurrentMobileIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextDestination,
    onSwipedRight: prevDestination,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const getWeatherIcon = () => {
    switch (weather) {
      case "sunny":
        return <Sun className="w-8 h-8" />;
      case "cloudy":
        return <Cloud className="w-8 h-8" />;
      case "rainy":
        return <CloudRain className="w-8 h-8" />;
      case "windy":
        return <Wind className="w-8 h-8" />;
    }
  };

  const getWeatherBackground = () => {
    switch (weather) {
      case "sunny":
        return "from-yellow-400 via-cyan-500 to-[#5EA4BF]";
      case "cloudy":
        return "from-gray-400 via-gray-500 to-gray-600";
      case "rainy":
        return "from-gray-600 via-gray-700 to-gray-800";
      case "windy":
        return "from-gray-300 via-slate-400 to-sky-600";
    }
  };

  /**
   * Handle a change to an input in the booking form.
   *
   * This function is used as an `onChange` handler for the booking form inputs.
   * It takes an `ChangeEvent` from the input as an argument, extracts the `name`
   * and `value` from the event target, and updates the `bookingFormData` state
   * with the new value.
   * @param {React.ChangeEvent<HTMLInputElement>} e The input change event.
   */
  const handleBookingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Validate the booking form.
   *
   * @returns {boolean} Whether the form is valid.
   */
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    const { fullName, email } = bookingFormData;

    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  /**
   * Handle changes to input fields in the card form.
   *
   * This function is used as an `onChange` handler for input fields in the card form.
   * It extracts the `name` and `value` from the event target and updates the
   * `cardFormData` state with the new value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Validate the card form.
   *
   * This function validates the card form fields and returns true if the form is valid, false otherwise.
   * It also updates the `cardErrors` state with validation errors.
   *
   * @returns {boolean} Whether the card form is valid.
   */
  /*******  cdc71c13-7ef0-4df6-a12f-8df5d18ef07a  *******/
  const validateCardForm = () => {
    const errors: { [key: string]: string } = {};
    const { cardNumber, cardHolder, expiry, cvv } = cardFormData;

    // Card Number
    if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits.";
    }

    // Card Holder
    if (cardHolder.trim().length < 2) {
      errors.cardHolder = "Card holder name is required.";
    }

    // Expiry
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      errors.expiry = "Use MM/YY format.";
    } else {
      const [mm, yy] = expiry.split("/").map(Number);
      const now = new Date();
      const expDate = new Date(2000 + yy, mm - 1);
      if (
        isNaN(mm) ||
        isNaN(yy) ||
        mm < 1 ||
        mm > 12 ||
        expDate < new Date(now.getFullYear(), now.getMonth())
      ) {
        errors.expiry = "Expiry date is invalid or in the past.";
      }
    }

    // CVV
    if (!/^\d{3,4}$/.test(cvv)) {
      errors.cvv = "CVV must be 3 or 4 digits.";
    }

    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden aspect-[2/1]"
    >
      {/* Dynamic Weather Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getWeatherBackground()} transition-all duration-3000`}
      >
        <div className="absolute inset-0 bg-black/20" />
        {weather === "rainy" && (
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute h-10 w-0.5 bg-blue-200 animate-rain !z-999999"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
        {weather === "windy" && (
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute w-100 h-0.5 bg-white/10 animate-wind !z-999999"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `-${Math.random() * 50 + 10}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        )}
        {weather === "cloudy" && (
          <div className="absolute inset-0 overflow-hidden opacity-50">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/50 rounded-full blur-lg animate-cloud !z-999999"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `-${Math.random() * 40 + 10}%`, // offscreen start
                  width: `${80 + Math.random() * 100}px`,
                  height: `${40 + Math.random() * 60}px`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${20 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      {/* Background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hot Air Baloons in the sky"
            className=" map-bg w-full h-full object-cover "
          />
        </div>
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </svg>
      </div>
      {/* Weather Widget */}
      <div className="absolute top-2 md:top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-2 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] z-20">
        <div className="flex items-center gap-3 text-[#3D592F]">
          {getWeatherIcon()}
          <div>
            <p className="text-xs font-medium opacity-70">Current Weather</p>
            <p className="text-sm md:text-lg font-bold capitalize">{weather}</p>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="relative z-20 mt-14 md:mt-0 p-6 md:p-8">
        <h1
          className={`text-4xl w-full lg:text-5xl font-bold text-white mb-2 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Discover Your Next Adventure
        </h1>
        <p
          className={`text-md md:text-xl text-white ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          Explore handpicked destinations around the world
        </p>
      </header>
      {/* Desktop Map Markers */}
      <div className="map-container relative w-full h-[50%] rounded-3xl flex justify-center items-center px-8 pb-4 z-20 animate-fade-in-up">
        <div className="interactive-map relative w-full h-full lg:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04 rounded-3xl bg-white/90 bg-transparent">
          <div className="w-full h-full !overflow-visible rounded-3xl shadow-md">
            <TravelMap
              destinations={destinations}
              isMobile={false}
              setSelectedDestination={setSelectedDestination}
              setMobileBookingVisible={setMobileBookingVisible}
              setDisplayBookingSummary={setDisplayBookingSummary}
              setDisplayBookingForm={setDisplayBookingForm}
              setDisplayPaymentForm={setDisplayPaymentForm}
              setDisplaySuccessMessage={setDisplaySuccessMessage}
            />
          </div>
        </div>
      </div>
      {/* Destination Cards Container */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 ${
          isVisible ? "animate-slide-up" : "translate-y-full"
        }`}
      >
        {/*  Mobile Carousel View*/}
        {isMobile ? (
          <div className="relative" {...swipeHandlers}>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentMobileIndex * 100}%)`,
                }}
              >
                {destinations.map((dest) => (
                  <div key={dest.id} className={`w-full flex-shrink-0 px-4`}>
                    <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className=" destination-image w-full h-40 object-cover"
                      />
                      <div className="destination-content p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="destination-title text-2xl font-bold text-[#3D592F]">
                              {dest.name}
                            </h3>
                            <p className="destination-location text-[#658C3E]">
                              {dest.country}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-[#5EA4BF]">
                            <Thermometer className="w-4 h-4" />
                            <span className="font-medium">
                              {dest.temperature}°C
                            </span>
                          </div>
                        </div>
                        <p className="destination-description text-gray-600 mb-4">
                          {dest.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {dest.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="destination-highlight px-3 py-1 bg-[#6FA638]/10 text-[#658C3E] rounded-full text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-[#5EA4BF]">
                              ${dest.price}
                            </span>
                            <span className="text-gray-500 text-xs ml-2">
                              {dest.duration}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedDestination(dest);
                              setMobileBookingVisible(true);
                              setDisplayBookingSummary(true);
                              setDisplayBookingForm(false);
                              setDisplayPaymentForm(false);
                              setDisplaySuccessMessage(false);
                            }}
                            className="px-6 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile Navigation */}
            <button
              onClick={prevDestination}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 rounded-full shadow-lg flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-[#3D592F]" />
            </button>
            <button
              onClick={nextDestination}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 rounded-full shadow-lg flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-[#3D592F]" />
            </button>
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentMobileIndex
                      ? "w-8 bg-[#5EA4BF]"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid View
          <div className="grid grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                className={`bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedDestination(dest)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white">
                    <Thermometer className="w-4 h-4" />
                    <span className="font-medium text-sm">
                      {dest.temperature}°C
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#3D592F] mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-[#658C3E] text-sm mb-3">{dest.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#5EA4BF]">
                      ${dest.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {dest.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {mobileBookingVisible && isMobile && selectedDestination && (
        <div className="fixed inset-0 bg-black/60 z-999 flex flex-col animate-modal-in overflow-y-auto">
          <div className="relative bg-white rounded-t-3xl flex flex-col flex-1">
            <button
              onClick={() => setMobileBookingVisible(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white text-[#3D592F] rounded-full shadow-md flex items-center justify-center"
            >
              ×
            </button>
            <div className="h-48 w-full relative">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover md:rounded-t-3xl"
              />
            </div>
            {/* Mobile Booking Summary */}
            <div className="p-6 space-y-6">
              {displayBookingSummary && (
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl font-bold text-[#3D592F] mb-1">
                    {selectedDestination.name}
                  </h2>
                  <p className="text-[#658C3E] mb-2">
                    {selectedDestination.country}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {selectedDestination.description}
                  </p>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#3D592F] mb-2">
                      Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedDestination.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#6FA638]/10 text-[#658C3E] rounded-full text-sm"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="w-full mt-6 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-medium text-lg"
                    onClick={() => {
                      setDisplayBookingSummary(false);
                      setDisplayBookingForm(true);
                    }}
                  >
                    Book This Experience
                  </button>
                </div>
              )}
              {/* Mobile Booking Form */}
              {displayBookingForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                      setDisplayBookingForm(false);
                      setDisplayPaymentForm(true);
                    }
                  }}
                  className="animate-fade-in-up space-y-6"
                >
                  <h3 className="text-xl font-semibold text-[#3D592F]">
                    Your Details
                  </h3>
                  <div>
                    <label htmlFor="fullName" className="text-[#3D592F]">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      value={bookingFormData.fullName}
                      onChange={handleBookingInputChange}
                      placeholder="Full Name"
                      className={`w-full px-4 py-2 rounded border text-[#3D592F] ${
                        formErrors.fullName
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-[#5EA4BF]"
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-sm text-red-500">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[#3D592F]">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={bookingFormData.email}
                      onChange={handleBookingInputChange}
                      placeholder="Email Address"
                      className={`w-full px-4 py-2 rounded border text-[#3D592F] ${
                        formErrors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-[#5EA4BF]"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setDisplayBookingSummary(true);
                        setDisplayBookingForm(false);
                      }}
                      className="w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              )}
              {/* Mobile Payment Form */}
              {displayPaymentForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (validateCardForm()) {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        setDisplayPaymentForm(false);
                        setDisplaySuccessMessage(true);
                      }, 2000);
                    }
                  }}
                  className="animate-fade-in-up space-y-4"
                >
                  <h3 className="text-xl font-semibold text-[#3D592F]">
                    Payment
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className=" ">
                      <label className="text-[#3D592F]">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        maxLength={16}
                        value={cardFormData.cardNumber}
                        onChange={handleCardInputChange}
                        placeholder="1234 5678 9012 3456"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.cardNumber
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.cardNumber && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.cardNumber}
                        </p>
                      )}
                    </div>
                    <div className="">
                      <label className="text-[#3D592F]">Card Holder</label>
                      <input
                        type="text"
                        name="cardHolder"
                        value={cardFormData.cardHolder}
                        onChange={handleCardInputChange}
                        placeholder="Full Name"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.cardHolder
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.cardHolder && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.cardHolder}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <label className="text-[#3D592F]">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        name="expiry"
                        maxLength={5}
                        value={cardFormData.expiry}
                        onChange={handleCardInputChange}
                        placeholder="MM/YY"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.expiry
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.expiry && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.expiry}
                        </p>
                      )}
                    </div>
                    <div className=" ">
                      <label className="text-[#3D592F]">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        maxLength={3}
                        value={cardFormData.cvv}
                        onChange={handleCardInputChange}
                        placeholder="123"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.cvv
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.cvv && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.cvv}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between gap-3 mt-6">
                    <button
                      onClick={() => {
                        setDisplayBookingForm(true);
                        setDisplayPaymentForm(false);
                      }}
                      className="w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading
                        ? "Processing..."
                        : `Pay $${selectedDestination.price}`}
                    </button>
                  </div>
                </form>
              )}
              {/* Success Message */}
              {displaySuccessMessage && (
                <div className="text-center animate-fade-in-up mt-8">
                  <div className="text-8xl text-green-600 mb-4 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#3D592F] mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve sent a confirmation to your email with details
                    about your booking.
                  </p>
                  <p className="text-gray-600">Enjoy your trip!</p>
                  <button
                    className="mt-6 px-6 py-2 bg-[#6FA638] text-white rounded-lg"
                    onClick={() => {
                      setSelectedDestination(null);
                      setDisplayBookingSummary(true);
                      setDisplayBookingForm(false);
                      setDisplayPaymentForm(false);
                      setDisplaySuccessMessage(false);
                      setBookingFormData({
                        fullName: "",
                        email: "",
                      });
                      setCardFormData({
                        cardNumber: "",
                        cardHolder: "",
                        expiry: "",
                        cvv: "",
                      });
                      setFormErrors({});
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Selected Destination Modal */}
      {selectedDestination && !isMobile && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-999 flex items-center justify-center p-8"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-[0_24px_80px_rgba(0,0,0,0.2),0_8px_32px_rgba(0,0,0,0.1)] animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => {
                  setSelectedDestination(null);
                  setDisplayBookingSummary(true);
                  setDisplayBookingForm(false);
                  setDisplayPaymentForm(false);
                  setDisplaySuccessMessage(false);
                  setBookingFormData({
                    fullName: "",
                    email: "",
                  });
                  setCardFormData({
                    cardNumber: "",
                    cardHolder: "",
                    expiry: "",
                    cvv: "",
                  });
                  setFormErrors({});
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors text-xl text-[#3D592F] cursor-pointer shadow-md "
              >
                ×
              </button>
            </div>
            <div className="p-8">
              {displayBookingSummary && (
                <div className="animate-fade-in-up">
                  <div className="flex items-center justify-between mb-6 ">
                    <div>
                      <h2 className="text-4xl font-bold text-[#3D592F] mb-2">
                        {selectedDestination.name}
                      </h2>
                      <p className="text-xl text-[#658C3E]">
                        {selectedDestination.country}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-bold text-[#5EA4BF]">
                        ${selectedDestination.price}
                      </span>
                      <p className="text-gray-500">
                        {selectedDestination.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">
                    {selectedDestination.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#3D592F] mb-4">
                      Highlights
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedDestination.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-[#6FA638]/10 text-[#658C3E] rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="w-full py-4 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    onClick={() => {
                      setDisplayBookingSummary(false);
                      setDisplayBookingForm(true);
                    }}
                  >
                    Book This Experience
                  </button>
                </div>
              )}
              {/* Desktop Booking Form */}
              {displayBookingForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (validateForm()) {
                      setDisplayBookingForm(false);
                      setDisplayPaymentForm(true);
                    }
                  }}
                  className="w-full shrink-0 px-4 animate-fade-in-up space-y-6"
                >
                  <h3 className="text-xl font-semibold text-[#3D592F] mb-4">
                    Your Details
                  </h3>
                  <div>
                    <label htmlFor="fullName" className="text-[#3D592F]">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={bookingFormData.fullName}
                      onChange={handleBookingInputChange}
                      placeholder="Full Name"
                      className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                        formErrors.fullName
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-[#5EA4BF]"
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-sm text-red-500 mb-4">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[#3D592F]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={bookingFormData.email}
                      onChange={handleBookingInputChange}
                      placeholder="Email Address"
                      className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                        formErrors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-[#5EA4BF]"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500 mb-4">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between gap-3 mt-10">
                    <button
                      type="button"
                      onClick={() => {
                        setDisplayBookingSummary(true);
                        setDisplayBookingForm(false);
                      }}
                      className="w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              )}
              {/* Desktop Payment Form */}
              {displayPaymentForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (validateCardForm()) {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        setDisplayPaymentForm(false);
                        setDisplaySuccessMessage(true);
                      }, 3000);
                    }
                  }}
                  className="w-full shrink-0 px-4 animate-fade-in-up space-y-6"
                >
                  <h3 className="text-xl font-semibold text-[#3D592F] mb-4">
                    Payment
                  </h3>
                  <div className="flex gap-4">
                    <div className="w-1/2 ">
                      <label className="text-[#3D592F]">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        maxLength={16}
                        value={cardFormData.cardNumber}
                        onChange={handleCardInputChange}
                        placeholder="1234 5678 9012 3456"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.cardNumber
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.cardNumber && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.cardNumber}
                        </p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <label className="text-[#3D592F]">Card Holder</label>
                      <input
                        type="text"
                        name="cardHolder"
                        value={cardFormData.cardHolder}
                        onChange={handleCardInputChange}
                        placeholder="Full Name"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.cardHolder
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.cardHolder && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.cardHolder}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1/2">
                      <label className="text-[#3D592F]">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        name="expiry"
                        maxLength={5}
                        value={cardFormData.expiry}
                        onChange={handleCardInputChange}
                        placeholder="MM/YY"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.expiry
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.expiry && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.expiry}
                        </p>
                      )}
                    </div>
                    <div className="w-1/2 ">
                      <label className="text-[#3D592F]">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        maxLength={3}
                        value={cardFormData.cvv}
                        onChange={handleCardInputChange}
                        placeholder="123"
                        className={`mb-1 w-full px-4 py-2 rounded border text-[#3D592F] focus:outline-none focus:ring-2 ${
                          cardErrors.cvv
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-[#5EA4BF]"
                        }`}
                      />
                      {cardErrors.cvv && (
                        <p className="text-sm text-red-500 mb-3">
                          {cardErrors.cvv}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between gap-3 mt-6">
                    <button
                      onClick={() => {
                        setDisplayBookingForm(true);
                        setDisplayPaymentForm(false);
                      }}
                      className="w-1/2 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium hover:bg-gray-400 hover:shadow-xl  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-1/2 py-3 bg-gradient-to-r from-[#5EA4BF] to-[#6FA638] text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading
                        ? "Processing..."
                        : `Pay $${selectedDestination.price}`}
                    </button>
                  </div>
                </form>
              )}
              {/* Success Message */}
              {displaySuccessMessage && (
                <div className="w-full shrink-0 px-4 flex flex-col items-center justify-center gap-4 text-center animate-fade-in-up">
                  <div className="text-6xl text-green-600 mb-4 animate-bounce">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#3D592F] mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve sent a confirmation to your email with details
                    about your booking.
                  </p>
                  <p className="text-gray-600">Enjoy your trip!</p>
                  <button
                    className="mt-6 px-6 py-2 bg-[#6FA638] text-white rounded-lg"
                    onClick={() => {
                      setSelectedDestination(null);
                      setDisplayBookingSummary(true);
                      setDisplayBookingForm(false);
                      setDisplayPaymentForm(false);
                      setDisplaySuccessMessage(false);
                      setBookingFormData({
                        fullName: "",
                        email: "",
                      });
                      setCardFormData({
                        cardNumber: "",
                        cardHolder: "",
                        expiry: "",
                        cvv: "",
                      });
                      setFormErrors({});
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

        * {
          font-family: "Nunito", sans-serif;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(-50%);
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rain {
          to {
            transform: translateY(100vh);
          }
        }

        @keyframes wind {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(120vw);
          }
        }

        @keyframes cloud {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(150vw);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slide-left 0.6s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }

        .animate-rain {
          animation: rain linear infinite;
        }

        .animate-wind {
          animation: wind linear infinite;
        }

        .animate-cloud {
          animation: cloud linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        @media (max-width: 450px) {
          .destination-image {
            height: 7rem;
          }

          .destination-content {
            padding: 1rem;
          }

          .destination-title {
            font-size: 1rem;
          }

          .destination-location,
          .destination-highlight,
          .destination-description {
            font-size: 0.7rem;
          }

          .map-container {
            align-items: flex-start;
            height: 28%;
            padding: 1rem 2.5rem 1rem;
          }

          .interactive-map,
          .map-overlay {
            height: 100%;
          }

          .tooltip {
            transform: translateX(-150%);
            left: 400%;
          }
        }

        @media (max-width: 400px) {
          .map-container {
            align-items: flex-start;
            height: 22%;
            padding: 0 2.5rem 1rem;
          }
        }

        @media (max-width: 375) {
          .map-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TravelHeroSection;
