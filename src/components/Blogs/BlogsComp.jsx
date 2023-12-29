import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/pulausamosir.jpg";
import Img2 from "../../assets/places/wakatobi.jpg";
import Img3 from "../../assets/places/budayabali.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Must-Visit Spots for Your Vacation on Samosir Island",
    description: `
      Looking for a perfect destination for relaxation in North Sumatra? Samosir Island might be the best option for you. There are many must-visit spots on Samosir Island, from hills and museums to cultural villages.\n
      Holbung Hill
      \nOne spot you shouldn't miss is Holbung Hill. Here, you can relax and enjoy the epic view of Lake Toba from a height while experiencing the cool air around.\n\nThis is the second paragraph about Holbung Hill and its surroundings.
      Besides being beautiful and cool, Holbung Hill also provides a peaceful atmosphere for its visitors. So, it's perfect if you need a space to unwind.

      To enjoy the expanse of this green hill, you will be charged a parking fee of Rp5,000 for motorcycles and Rp10,000 for cars. This defines that a vacation doesn't have to be luxurious and expensive, right!
    `,
    author: "Alfito Dwi Putra",
    date: "December 22, 2023",
  },
  {
    id: 2,
    image: Img2,
    title: "Facts About Wakatobi You Should Know",
    description:
      "Many have proven that Wakatobi has a vast and beautiful coral reef area, covering up to 118 hectares. According to the Ministry of Environment and Forestry, Wakatobi also has the longest atoll coral in the world, measuring 48 kilometers. It's no wonder that the species of fish in Wakatobi are abundant and diverse. Wakatobi National Park is located in a strategic area, the Coral Triangle Center. Out of the 820 coral species worldwide, 750 of them are in Wakatobi. For those who want to see the coral reefs in Wakatobi, you can visit Tomia Island, Wangi-wangi Island, Binongko Island, and Hoga Island.",
    author: "Jonathan Chandra",
    date: "December 12, 2023",
  },
  {
    id: 3,
    image: Img3,
    title: "Don't Miss These Cultural Destinations in Bali",
    description:
      "Ulun Danu Temple is located on Lake Beratan, Candikuning Village, Baturiti District, Tabanan Regency, Bali. This temple is also one of the historical attractions in Bali. Ulun Danu Temple was featured on the Rp 50,000 banknote in the 2016 edition. When the lake water is high, you will see the temple seemingly floating on the lake. You can enjoy the beauty of the lake or take part in water activities. You can go around Lake Beratan by speed boat at a cost of Rp150,000 for 4 people or a duck boat at Rp40,000 for 2 people. Ulun Danu Temple is open from 08:00 to 18:00 WITA with an entrance fee of Rp30,000.",
    author: "Suryo Aji",
    date: "December 10, 2023",
  },
];


const BlogsComp = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10 overflow-x-auto">
      <section data-aos="fade-up" className="container mx-auto max-w-5xl px-4">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;