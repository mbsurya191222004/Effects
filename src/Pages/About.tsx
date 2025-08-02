function About() {
    return ( 
    <div 
    className=" bg-primary relative min-h-[100vh]  p-10 -z-10 font-semibold"
    >
        <div className=" bg-secondary rounded-3xl p-3 relative min-h-[90vh] text-left text-xl flex flex-col justify-center items-center align-middle  px-10 -z-10">
        <h1 className="font-bold text-4xl my-6">About Us</h1>
        <p className="text-left"><strong>Namokar Enterprises</strong>, established in 2005 and based in New Delhi, is a reputed manufacturer, exporter, and supplier of an exclusive range of greeting cards and related products. We specialize in :</p>
        <ul className="list-decimal list-outside text-left font-extralight">
            <li>Wrapping Sheets</li>
            <li>Greeting Cards</li>        
            <li>Carry Bags</li>
            <li>Slam Books</li>
            <li>Shagun Envelopes</li>
        </ul>
<br />
        <p>Each product is designed by our skilled professionals using modern tools and premium raw materials, ensuring elegant design, superior color printing, and excellent finish. Customization in terms of size, shape, and content is available as per customer requirements.</p>

        <h2 className="font-bold text-2xl m-4">Our Strengths</h2>
        <p>
            Skilled and experienced workforce
            Timely and reliable delivery
            Customer-centric approach
            Ethical and transparent business practices
            Ability to handle bpk and urgent orders
            Strong infrastructure and production capabilities
            Competitive and pocket-friendly pricing
        </p>

        <h2 className="font-bold text-2xl m-4">Customer Satisfaction</h2>
        <p>Our mission is to provide high-quality, emotionally resonant greeting cards for every occasion. Attractive photos and meaningful quotations make our cards suitable for personal gifting. We support multiple payment options and offer customized packaging to suit client needs.</p>

        <p>With the inspiring leadership of <strong>Mr. Anil Kumar (Proprietor)</strong>, Namokar Enterprises continues to grow and build long-lasting relationships with customers across India.</p>
    </div>
    </div>
     );
}

export default About;