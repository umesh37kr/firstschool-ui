import Link from "next/link";

export const metadata = {
  title: "School Blog | First School Meral",
  description:
    "Read educational blogs, parenting tips, and school insights from First School Meral.",
};

const blogs = [
  {
    title: "Why Choosing the Right School Matters for Your Child",
    slug: "choose-right-school",
    description:
      "Discover how selecting the right school impacts your child’s future and growth.",
    image: "/umesh.jpeg",
  },
];

export default function BlogPage() {
  return (
    <div className="px-4 md:px-20 py-10 bg-slate-50">
      <h1 className="text-3xl font-bold mb-6 text-heading">Our Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-heading">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 text-paragraph">
                  {blog.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
