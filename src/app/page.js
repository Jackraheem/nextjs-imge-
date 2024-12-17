import Image from 'next/image';
import hr from '../../public/ddp.webp';
import "../app/globals.css"

const HomePage = () => {
  return (
    <div style={{  alignItems: 'center', gap: '10px' }}>
     <div style={{
      backgroundImage: `url('https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '100vh' // Adjust height as needed
    }}>
     <h1 style={{display :"flex", justifyContent :"center" , alignItems:"center",height :"100vh"}}>HELLO  NEXT .JS WEBDADDY</h1>
    </div>

      <h1> Using the Image component</h1>
      <p> Using Image component it is compress the image size</p>
      <hr/>
      <Image 
        src={hr}
        alt="Example description"
        width={400} // Width in pixels
        height={260} // Height in pixels
      />
      <h1>Normal img tag</h1><hr/>
      <img src='my wall.jpg'  style={{height :"50%", width:"45%"}}/>
      <h1>external source imge</h1>
      <img src="https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649"  style={{height :"50%", width:"45%"}}/>

    </div>
  );
};

export default HomePage;
