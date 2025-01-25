import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Scripting",
      skills: ["C#", "Python", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Databases & Caching",
      skills: ["MS SQL Server", "Oracle", "PL/SQL", "MongoDB", "Redis", "Azure SQL Database"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["ASP.NET Core MVC", ".NET Core", "Spring Boot", "React", "Entity Framework"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure", "Docker", "Jenkins", "Terraform", "Git"]
    },
    {
      title: "APIs & Testing",
      skills: ["RESTful APIs", "Microservices", "SOAP", "gRPC", "Postman", "Swagger"]
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;