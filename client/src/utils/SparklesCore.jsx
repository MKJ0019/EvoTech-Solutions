"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import classNames from "classnames";

const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = React.useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      console.log(container);
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  return (
    <motion.div
      animate={controls}
      className={classNames("opacity-0", className)}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: background || "#fffff" },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: { value: 1 },
                vertical: { value: 1 },
              },
              collisions: {
                absorb: { speed: 2 },
                bounce: {
                  horizontal: { value: 1 },
                  vertical: { value: 1 },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: { enable: true, retries: 0 },
              },
              color: {
                value: particleColor || "#3d3d3d",
                animation: {
                  h: { count: 0, enable: false },
                  s: { count: 0, enable: false },
                  l: { count: 0, enable: false },
                },
              },
              move: {
                angle: { offset: 0, value: 90 },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: { x: 3000, y: 3000 },
                },
                center: { x: 50, y: 50, mode: "percent", radius: 0 },
                decay: 0,
                distance: {},
                direction: "none",
                enable: true,
                gravity: { acceleration: 9.81, enable: false },
                outModes: { default: "out" },
                size: false,
                speed: { min: 0.1, max: 1 },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                limit: { mode: "delete", value: 0 },
                value: particleDensity || 120,
              },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  count: 0,
                  enable: true,
                  speed: speed || 4,
                  startValue: "random",
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: { value: "#000" },
                enable: false,
                offset: { x: 0, y: 0 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                },
              },
              stroke: { width: 0 },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

export default SparklesCore;
