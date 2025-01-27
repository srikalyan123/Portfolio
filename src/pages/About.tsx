import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import React from "react";
import profile2 from  '../assets/Profile2.jpg';


const About = () => {
  const testimonials = [
    {
      text: "An exceptional engineer who consistently delivers high-quality solutions.",
      author: "Former Colleague at THC"
    },
    {
      text: "Great problem solver with deep technical expertise.",
      author: "Team Lead at Newgen"
    },
    {
      text: "Dedicated professional who brings innovation to every project.",
      author: "Project Manager"
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-background to-muted">
      <div className="container px-4 md:px-6 mt-10">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center">About Me</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          
          <div className="mb-6 mt-5 flex">
              <p className="text-gray-700 leading-relaxed">
                I am a dedicated Software Engineer with expertise in Azure Cloud, .NET Core, and modern web technologies. With a strong background in software design, development, and optimization, I have consistently delivered high-performing and scalable applications that enhance user experience and operational efficiency.
              </p>
              
          </div>

          {/* Current Role */}
          <div className="mb-6 flex">
            
            <div>
              <p className="text-gray-700">
                Currently, I am working as a Software Engineer at THC, where I have integrated Azure Cloud for seamless deployment, significantly reduced deployment times, and optimized system performance. My passion for continuous improvement drives me to leverage the latest technologies, such as React, .NET Core, Jenkins, and Terraform.
              </p>
              <p className="text-gray-700">
                Previously, at Newgen Software Technologies, I contributed to optimizing backend performance, enhancing system scalability, and integrating machine learning models and APIs. I was proud to be part of key projects that reduced downtime and improved system reliability.
              </p>
              </div>
              
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
              My academic background includes a Master’s in Computer Science from the University of Texas at Arlington.
            </p>
            <p className="text-gray-700">
              I also hold a Bachelor's in Computer Science from Amrita Vishwa Vidyapeetham.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
                I have been recognized for my contributions with the Excellence Award at Newgen Software Technologies, reflecting my commitment to technical excellence.
              </p>
          </div>
            {/* <img
                src={companyLogoTHC}
                alt="THC Logo"
                className="w-16 h-16 object-contain rounded-lg"
              />
            </div> */}

          {/* Awards */}
          
        </motion.div>
      </div>
    </div>
  );
};

export default About;
