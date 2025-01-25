import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "THC",
      position: "Software Engineer",
      period: "March 2024 - Present",
      achievements: [
        "Integrated Azure Cloud for seamless deployment",
        "Optimized frontend rendering with React and jQuery",
        "Improved system performance by 40%",
        "Automated build and deployment pipelines"
      ]
    },
    {
      company: "Newgen Software Technologies",
      position: "Software Design Engineer",
      period: "July 2019 - December 2021",
      achievements: [
        "Improved system scalability and modularity",
        "Boosted backend performance by 30-35%",
        "Integrated Consul for service registry",
        "Enhanced multilingual service communication",
        "Integrated machine learning models"
      ]
    },
    {
      company: "Newgen Software Technologies",
      position: "Intern",
      period: "January 2019 - June 2019",
      achievements: [
        "Integrated Google Vision API",
        "Utilized web service protocols",
        "Enhanced system monitoring",
        "Improved reporting accuracy"
      ]
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A timeline of my professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-primary">{exp.position}</p>
                    </div>
                    <p className="text-muted-foreground">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;