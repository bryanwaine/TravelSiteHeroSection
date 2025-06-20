import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { LatLngTuple } from "leaflet";

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

interface TravelMapProps {
  destinations: Destination[];
  isMobile: boolean;
  setSelectedDestination: (destination: Destination) => void;
  setMobileBookingVisible: (visible: boolean) => void;
  setDisplayBookingSummary: (visible: boolean) => void;
  setDisplayBookingForm: (visible: boolean) => void;
  setDisplayPaymentForm: (visible: boolean) => void;
  setDisplaySuccessMessage: (visible: boolean) => void;
}

type FitBoundsProps = {
  positions: LatLngTuple[];
};

const TravelMap: React.FC<TravelMapProps> = ({
  destinations,
  isMobile,
  setSelectedDestination,
  setMobileBookingVisible,
  setDisplayBookingSummary,
  setDisplayBookingForm,
  setDisplayPaymentForm,
  setDisplaySuccessMessage,
}) => {
  const [hoveredDestination, setHoveredDestination] = useState<number | null>(
    null
  );
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const customIcon = L.divIcon({
    className: "", // prevent default Leaflet styles
    html: `
        <div class="relative w-12 h-12 ">
          <!-- Pulsating background -->
          <div class="absolute top-[-20px] left-[-12px] w-10 h-10 bg-[#6FA638]/30 rounded-full animate-ping"></div>
    
          <!-- Location pin -->
          <div class="absolute top-[-15px] left-[-5px] w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#6FA638" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>
        </div>
      `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  const center: LatLngTuple = [20, 0];

  const FitBoundsOnMobile = ({ positions }: FitBoundsProps) => {
    const map = useMap();

    useEffect(() => {
      if (window.innerWidth <= 768 && positions.length) {
        const bounds = L.latLngBounds(positions);
        map.fitBounds(bounds, {
          padding: [30, 30],
          animate: true,
        });
      }
    }, [map, positions]);

    return null;
  };

  function CreateLeafletPane({
    name,
    zIndex = 800,
  }: {
    name: string;
    zIndex?: number;
  }) {
    const map = useMap();

    useEffect(() => {
      if (!map.getPane(name)) {
        map.createPane(name);
      }

      const pane = map.getPane(name);
      if (pane) {
        pane.style.zIndex = zIndex.toString();
      }
    }, [map, name, zIndex]);

    return null;
  }

  return (
    <MapContainer
      center={center}
      zoom={2}
      scrollWheelZoom={true}
      className=" !relative !w-full !h-full !z-0 !rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CreateLeafletPane name="tooltipPane" zIndex={8000000000000} />

      {destinations.map((dest, i) => (
        <Marker
          key={i}
          position={dest.position}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              setSelectedDestination(dest);
              if (isMobile) {
                setMobileBookingVisible(true);
                setDisplayBookingSummary(true);
                setDisplayBookingForm(false);
                setDisplayPaymentForm(false);
                setDisplaySuccessMessage(false);
              }
            },
            mouseover: () => {
              setHoveredDestination(dest.id);
              if (videoRefs.current[dest.id]) {
                videoRefs.current[dest.id].play();
              }
            },
            mouseout: () => {
              setHoveredDestination(null);
              if (videoRefs.current[dest.id]) {
                videoRefs.current[dest.id].pause();
                videoRefs.current[dest.id].currentTime = 0;
              }
            },
          }}
        >
          {hoveredDestination === dest.id && !isMobile && (
            <Tooltip
              pane="tooltipPane"
              permanent
              direction={dest.direction === "top" ? "top" : "bottom"}
              offset={[0, dest.direction === "top" ? -25 : 5]}
              interactive
              opacity={1}
              className={`!p-0 !bg-transparent !border-0 !shadow-none !z-[99999999]`}
            >
              <div className="w-30 md:w-64 bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in !z-[99999999]">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[dest.id] = el;
                  }}
                  className="w-full h-15 md:h-32 object-cover rounded-t-2xl"
                  src={dest.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="py-1 px-2 md:p-4 ">
                  <h3 className="font-bold text-[#3D592F] text-xs md:text-lg">
                    {dest.name}
                  </h3>
                  <p className="text-[#658C3E] text-[10px] md:text-sm">
                    {dest.country}
                  </p>
                  <div className="hidden md:flex items-center justify-between mt-2">
                    <span className="text-[#5EA4BF] font-semibold">
                      ${dest.price}
                    </span>
                    <span className="text-xs text-gray-500">
                      {dest.duration}
                    </span>
                  </div>
                </div>
              </div>
            </Tooltip>
          )}
        </Marker>
      ))}

      {/* Auto-fit on mobile */}
      <FitBoundsOnMobile positions={destinations.map((d) => d.position)} />
    </MapContainer>
  );
};

export default TravelMap;
