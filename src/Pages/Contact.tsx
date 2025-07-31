function Contact() {
    return ( 
    <div className="bg-primary min-h-[93vh] flex flex-col  items-center py-20">
    <h1 className="font-bold text-4xl my-6 ">Contact Us</h1>
    <div className="font-[600] text-2xl m-4 bg-secondary shadow-2xl  flex flex-col justify-center align-middle items-center rounded-3xl border-primary">
    <ul className="list-disc list-inside p-3.5">
    <li className="p-3.5">Email: <a href="mailto:namokareffects@gmail.com">namokareffects@gmail.com</a></li>
      <li className="p-3.5">Phone: <a href="tel:+919873544640">+91 98735 44640</a></li>
      <li className="p-3.5">Location: WZ-428, Naraina Village,New Delhi - 110 028, Delhi, India</li>
    </ul>      
    </div>
  </div>
     );
}

export default Contact;