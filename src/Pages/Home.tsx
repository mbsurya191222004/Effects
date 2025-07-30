import { motion } from "motion/react";

function Home() {
    return ( 
<motion.div 
className="bg-primary"
initial = {{
    opacity: 0,
}}
animate={{
    opacity : 1,
}}
transition={{
    duration : 0.6,
    ease: [0, 0.71, 0.2, 1.01],
}}
>
  
  <motion.div 
  className="flex items-center justify-center "
  initial={{
        scale : 1.2 ,
  }}
  animate={{
    scale : 1 ,
  }}
  transition={{
    duration : 0.4,
  }}
  >
    <div className="bg-[url('img_wrap1.jpg')] h-90 bg-cover flex flex-col justify-center items-center p-8 rounded text-center w-[100vw]">
      <h2 className="bg-primary/70 p-4 bg-clip-border w-fit text-4xl font-extrabold rounded-xl  mb-4">
        Effects 
      </h2>
      <p className="bg-primary/70 p-4 font-bold text-2xl rounded-xl ">
        Creating heartfelt expressions with premium greeting cards and wrapping solutions since 2005.
      </p>
    </div>
  </motion.div>
<hr />
  <div className=" text-center px-10 py-12">
    <h3 className="text-4xl font-bold  mb-6">About Us</h3>
    <p className="text-3xl">
      Established in 2005, Effects by Namokar Enterprises is a leading Indian manufacturer and exporter of high-quality greeting cards, wrapping sheets, and paper-based gifting items. From festive cards to elegant notebooks, every piece is crafted with care, premium materials, and eye-catching designs—making every celebration more meaningful.
    </p>
  </div>
<hr />
  <section id="products" className="bg-secondary py-16 px-6 w-full">
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold  mb-8 text-center">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-tertiary p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-3xl font-semibold p-8 text-center">Greeting Cards</h4>
          <p className="font-medium text-2xl text-center px-3 ">
            New Year, Diwali, Valentine’s, Christmas, Rakhi, Wedding & Birthday cards with beautiful designs and quotes.
          </p>
        </div>
        <div className="bg-tertiary p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-3xl font-semibold p-8 text-center">Stationery & Gifting</h4>
          <p className="font-medium text-2xl text-center px-3 ">
            Thoughtfully designed Slam Books and Notebooks for memorable occasions and personal use.
          </p>
        </div>
        <div className="bg-tertiary p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-3xl font-semibold p-8 text-center">Wrapping Sheets</h4>
          <p className="font-medium text-2xl text-center px-3 ">
            High-quality, vibrant wrapping sheets perfect for festivals, birthdays, and celebrations.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="sustainability" className="container mx-auto py-16 px-6">
    <h3 className="text-3xl font-bold  mb-6">Craftsmanship & Vision</h3>
    <p className=" max-w-3xl leading-relaxed">
      At Effects, each product is crafted with care using premium materials and advanced printing techniques. Led by Mr. Anil Kumar, our team of skilled professionals combines creativity with quality, offering customizable designs that reflect emotions and elegance.
    </p>
  </section>



</motion.div>


     );
}

export default Home;