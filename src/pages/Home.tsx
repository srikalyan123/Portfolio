import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const scrollToBlog = () => {
    navigate('/blog');
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text bg-gradient-to-r from-primary to-primary-foreground">
                Software Engineer & Technology Enthusiast
              </h1>
              <p className="max-w-[600px] text-muted-foreground mx-auto mt-4 text-xl">
                Passionate about creating innovative solutions using advanced technologies
                and collaborating with talented engineers to deliver high-quality products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-x-4"
            >
              <Button
                onClick={() => navigate("/about")}
                className="bg-primary hover:bg-primary/90"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={scrollToBlog}
                variant="outline"
                className="hover:bg-primary/5"
              >
                View Stories <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;