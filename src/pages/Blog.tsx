import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../supabaseClient"; // Import your Supabase client
import { Card } from "@/components/ui/card";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id:0,
    name: "",
    role: "",
    company: "",
    blog_content: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  // Fetch blogs from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from("Porfolio_Blogs") // Match your Supabase table name
          .select("*")
          .order("date", { ascending: false });
        console.log(data, error);
        if (error) throw error;
        setBlogs(data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      console.log(formData);
      const { data, error } = await supabase
        .from("Porfolio_Blogs")
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Reset form and refresh blog list
      setMessage("Blog submitted successfully!");
      setFormData({
        id:0,
        name: "",
        role: "",
        company: "",
        blog_content: "",
        date: "",
      });
      setBlogs((prevBlogs) => [data[0], ...prevBlogs]); // Add new blog to the list
    } catch (error) {
      console.error("Error submitting blog:", error);
      setMessage("Error submitting blog. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-background to-muted">
      <div className="container px-4 md:px-6">
        {/* Blog Submission Form */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-center mb-8">Submit a Blog</h1>

          {message && (
            <div
              className={`p-4 mb-6 text-center ${
                message.includes("successfully")
                  ? "text-green-700 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              {message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 shadow-md rounded-md"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your role"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your company"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                name="blog_content"
                value={formData.blog_content}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Write your blog content here"
                rows={5}
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Submit Blog
            </button>
          </form>
        </div>

        {/* Blog Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Blog & Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experiences and perspectives shared by colleagues and
              collaborators
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading blogs...</div>
          ) : (
            <motion.div
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
            >
              {blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  className="flex-shrink-0 w-80"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{blog.name}</h3>
                    <div className="mb-4">
                      <p className="text-primary font-medium">
                        {blog.role} at {blog.company}
                      </p>
                    </div>
                    <p className="text-muted-foreground flex-grow">
                      {blog.blog_content}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {blog.date}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
