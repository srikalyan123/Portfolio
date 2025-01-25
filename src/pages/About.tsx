import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A passionate software engineer with expertise in designing and developing creative solutions
              using advanced technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2">
                <li>Master's in Computer Science - University of Texas at Arlington</li>
                <li>Bachelor's in Computer Science - Amrita Vishwa Vidyapeetham</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Experience Highlights</h3>
              <ul className="space-y-2">
                <li>Software Engineer at THC</li>
                <li>Software Design Engineer at Newgen Software Technologies</li>
                <li>Intern at Newgen Software Technologies</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <ul className="space-y-2">
                <li>Excellence Award at Newgen Software Technologies</li>
                <li>Recognition for Intelligent IDXtract development</li>
              </ul>
            </Card>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Others Say</h2>
            <div className="flex space-x-4 testimonial-scroll">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 min-w-[300px]">
                  <p className="italic mb-4">{testimonial.text}</p>
                  <p className="text-sm text-muted-foreground">- {testimonial.author}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;