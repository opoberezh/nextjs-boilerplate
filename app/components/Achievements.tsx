"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  title: string;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <Container sx={{ width: "320px", mb: 6 }}>
      <Typography variant="h3" align="center" sx={{mt: 6,  fontWeight: "bold",}} >
        Achievements 🏆
      </Typography>
      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          style={{ borderRadius: "12px", height:'380px'}}
        >
          {data.map(({ id, image, title }) => (
            <SwiperSlide
              key={id}
              style={{
                backgroundColor: "transparent",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {title}
          </Typography>
              <Box
                sx={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "300px",
                  width: "100%", 
                  borderRadius: 2,
                  boxShadow: 3,
                  position: "relative",
                }}
              />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* Custom Swiper Navigation Buttons */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #00ffcc;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 255, 204, 0.3);
        }

        .swiper-button-prev {
          left: -8px;
        }

        .swiper-button-next {
          right: -8px;
        }

        /* Add shadow effect */
        .swiper-button-prev,
        .swiper-button-next {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        }
        /* Pagination Bullets */
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 0.6;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
          margin: 30px;
          
        }

        /* Active Bullet */
        .swiper-pagination-bullet-active {
          background-color: #00ffcc;
          width: 16px;
          height: 16px;
          opacity: 1;
          box-shadow: 0px 0px 8px rgba(255, 64, 129, 0.8);
        }
        .swiper-pagination-fraction,
        .swiper-pagination-custom,
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal {
          bottom: var(--swiper-pagination-bottom, -3px);
          n-horizontal {
          }
        }
      `}</style>
    </Container>
  );
};

export default DemoSlider;
