export const metadata = {
  title: "Why Choosing the Right School Matters | First School",
  description:
    "Learn why selecting the right school is crucial for your child’s education and future success.",
};

export default function BlogPost() {
  return (
    <div className="px-4 md:px-32 py-10 bg-slate-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
        Why Choosing the Right School Matters for Your Child
      </h1>

      <img
        src="/school-building.jpg"
        alt="Best School in Meral"
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <div className="text-paragraph space-y-4 leading-7">
        <p>
          Choosing the right school is one of the most important decisions for
          parents. A good school not only provides education but also shapes a
          child’s personality, confidence, and future.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-heading">
          1. Strong Academic Foundation
        </h2>
        <p>
          A quality school ensures that children build a strong academic base.
          This helps them perform better in higher education and competitive
          exams.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-heading">
          2. Overall Personality Development
        </h2>
        <p>
          Schools play a key role in improving communication skills, discipline,
          and leadership qualities.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-heading">
          3. Safe and Positive Environment
        </h2>
        <p>
          A safe and friendly environment encourages children to learn without
          fear and grow confidently.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-heading">
          Why First School in Meral is the Best Choice?
        </h2>
        <p>
          First School provides quality English medium education, experienced
          teachers, and a student-friendly environment in Meral, Jharkhand.
        </p>

        <p className="font-semibold mt-6">
          👉 If you are looking for the best school in Meral, contact us today!
        </p>
      </div>
    </div>
  );
}
