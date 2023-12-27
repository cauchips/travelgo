import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/pulausamosir.jpg";
import Img2 from "../../assets/places/wakatobi.jpg";
import Img3 from "../../assets/places/budayabali.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Spot yang Wajib Kamu Kunjungi saat Liburan ke Pulau Samosir",
    description: `
      Mau cari destinasi wisata yang pas buat healing di Sumatera Utara? Pulau Samosir bisa jadi opsi terbaik buat Sobat Pesona, nih. Ada banyak spot wajib di Pulau Samosir buat kamu kunjungi ketika sedang main ke sini, mulai dari perbukitan, museum, hingga desa wisata.\n
      Bukit Holbung
      \nSpot yang harus Sobat Pesona datangi adalah Bukit Holbung. Di tempat ini, Sobat Pesona bisa bersantai sejenak menikmati pemandangan epic Danau Toba dari ketinggian sembari merasakan sejuknya udara di sekitarnya.\n\nIni adalah paragraf kedua tentang Bukit Holbung dan sekitarnya.
      Selain cantik dan sejuk, Bukit Holbung ini juga memberikan suasana tenang bagi pengunjungnya. Jadi, pas banget kalau Sobat Pesona sedang butuh space untuk sekedar melepas penat.

      Untuk bisa menikmati hamparan bukit hijau satu ini, kamu bakal dikenakan biaya parkir Rp5.000 untuk motor dan Rp 10.000 untuk mobil. Ini definisi kalau liburan nggak harus mewah dan mahal, Sob!`,
    author: "Alfito Dwi Putra",
    date: "Desember 22, 2023",
  },
  {
    id: 1,
    image: Img2,
    title: "Hal Tentang Wakatobi yang Wajib Kamu Tahu",
    description:
      "Banyak yang telah membuktikan kalau Wakatobi memiliki area terumbu karang yang sangat indah dan luasnya sampai 118 hektare. Menurut Kementrian Lingkungan Hidup dan Kehutanan, Wakatobi juga memiliki karang atol terpanjang di dunia, dengan panjang 48 kilometer. Jadi nggak heran kalau spesies ikan yang terdapat di Wakatobi sangat berlimpah ruah dan berbagai macam. Taman Nasional Wakatobi berada di kawasan yang strategis, yaitu di Segi Tiga Karang Dunia (Coral Tri-angle Center). Dari 820 jenis karang yang ada di dunia, 750 jenis karang di antaranya ada di Wakatobi. Buat Sobat Pesona yang ingin melihat terumbu karang di Wakatobi, bisa mengunjungi Pulau Tomia, Pulau Wangi-wangi, Pulau Binongko, dan Pulau Hoga.. ",
    author: "Jonathan Chandra",
    date: "Desember 12, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Destinasi Wisata Budaya Bali yang Sayang Dilewatkan",
    description:
      "Pura Ulun Danu berada di Danau Beratan, Desa Candikuning, Kecamatan Baturiti, Kabupaten Tabanan, Bali. Pura ini juga salah satu tempat wisata sejarah di Bali. Pura Ulun Danu pernah menjadi gambar dalam mata uang Rp 50 ribu tahun edisi tahun 2016 lho. Kalau air danau sedang naik, kamu akan melihat seolah pura mengapung di danau.Sobat Pesona bisa menikmati keindahan danau atau menikmati wahana air. Kamu bisa berkeliling Danau Beratan menggunakan speed boat dengan biaya Rp150.000,- untuk 4 orang atau bebek air Rp40.000.- untuk 2 orang. Di sini juga ada penyewaan perahu lho.Pura Ulun Danu mulai buka jam 08.00-18.00 WITA dengan tiket masuk Rp30.000,-.",
    author: "Suryo Aji",
    date: "Desember 10, 2023",
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