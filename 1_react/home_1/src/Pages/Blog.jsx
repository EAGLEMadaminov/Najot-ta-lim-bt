import Form from "../Components/Form";
import BlogTop1 from "../assets/blogTop1.png";
import BlogTop2 from "../assets/blogTop2.png";
import BlogTop3 from "../assets/blogTop3.png";
import BlogPerson1 from "../assets/blogPerson1.png";
import BlogPerson2 from "../assets/blogPerson2.png";
import BlogPerson3 from "../assets/blogPerson3.png";
import blogImage from "../assets/blogImage.png";

import BlogComponent from "../Components/Home/Blog.jsx";

const blogs = [
  {
    topImage: BlogTop1,
    text: "Pitch termsheet backing validation focus release.",
    personImage: BlogPerson1,
    name: "Chandler Bing",
  },
  {
    topImage: BlogTop2,
    text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    personImage: BlogPerson2,
    name: "Rachel Green",
  },
  {
    topImage: BlogTop3,
    text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    personImage: BlogPerson3,
    name: "Monica Geller",
  },
  {
    topImage: BlogTop1,
    text: "Pitch termsheet backing validation focus release.",
    personImage: BlogPerson1,
    name: "Chandler Bing",
  },
  {
    topImage: BlogTop2,
    text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    personImage: BlogPerson2,
    name: "Rachel Green",
  },
  {
    topImage: BlogTop3,
    text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    personImage: BlogPerson3,
    name: "Monica Geller",
  },
];
function Blog() {
  return (
    <div>
      <div className="container mx-auto text-center my-10 border-b py-10">
        <p>Blog</p>
        <h2 className="text-6xl">Thoughts and words</h2>
        <div className="mt-10 flex  justify-between items-center">
          <img src={blogImage} alt="" />

          <div className="text-left ml-[60px]">
            <p className="text-[#777777]">
              <span className="text-[#0A2640] font-semibold mr-3">
                Category
              </span>
              November 22, 2021
            </p>
            <h2 className="text-6xl my-10">
              Pitch termsheet backing validation focus release.
            </h2>
            <div className="flex ">
              <img src={BlogPerson1} alt="" />
              <p className="ml-4">Chandler Bing</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container mx-auto">
          <h2 className="text-3xl ml-[50px]">Latest news</h2>
          <div className="flex flex-wrap gap-10 justify-around">
            {blogs.map((item, index) => {
              return <BlogComponent key={index} data={item} />;
            })}
          </div>
          <button className="border p-2 px-5 block mx-auto my-10 border-[#0A2640] font-semibold rounded-[20px] text-[#0A2640]">
            Load more
          </button>
        </div>
      </section>
      <section className="my-[100px]">
        <Form />
      </section>
    </div>
  );
}

export default Blog;
