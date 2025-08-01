import ButtonCard from "../components/ButtonCard";

function Home() {
    return ( 
<div 
className="bg-primary"
>
  
  <div 
  className="flex items-center justify-center "
  >
    <div className="bg-[url('/img_wrap1.jpg')] h-90 bg-cover flex flex-col justify-center items-center p-8 rounded text-center w-[100vw]">
      <h2 className="bg-primary/70 p-4 bg-clip-border w-fit text-4xl font-extrabold rounded-xl  mb-4">
        Namokar Effects 
      </h2>
      <p className="bg-primary/70 p-4 font-bold text-2xl rounded-xl ">
        Creating heartfelt expressions with premium greeting cards and wrapping solutions since 2005.
      </p>
    </div>
  </div>
<hr />
  <div className=" text-center px-10 py-12">
    <p className="text-2xl">
      Established in 2005, Effects by Namokar Enterprises is a leading Indian manufacturer and exporter of high-quality greeting cards, wrapping sheets, and paper-based gifting items. From festive cards to elegant notebooks, every piece is crafted with care, premium materials, and eye-catching designs-making every celebration more meaningful.
    </p>
  </div>
<hr />
  <section id="products" className="bg-secondary py-16 px-6 w-full">
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold  mb-8 text-center">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ButtonCard path="/Wrapping Paper" heading="Wrapping Sheets" description="High-quality, vibrant wrapping sheets perfect for festivals, birthdays, and celebrations." />
        <ButtonCard path="/Greeting Card" heading="Greeting Cards" description="New Year, Diwali, Valentine’s, Christmas, Rakhi, Wedding & Birthday cards with beautiful designs and quotes."/>
        <ButtonCard path="/Slam Book" heading="Slam Books" description="Capture memories, thoughts, and heartfelt messages from friends in one cherished place. A timeless keepsake of love, laughter, and friendship." />
        <ButtonCard path="/Shagun Envelope" heading="Shagun Envelope" description="A beautiful token to gift blessings and good wishes with grace. Perfect for weddings, festivals, and special occasions." />
        </div>
    </div>
  </section>

  <section id="sustainability" className="container mx-auto py-16 px-6">
    <h3 className="text-4xl font-bold  mb-6">Craftsmanship & Vision</h3>
    <p className="text-2xl max-w-3xl leading-relaxed">
      At Effects, each product is crafted with care using premium materials and advanced printing techniques. Led by Mr. Anil Kumar, our team of skilled professionals combines creativity with quality, offering customizable designs that reflect emotions and elegance.
    </p>
  </section>



</div>


     );
}

export default Home;
