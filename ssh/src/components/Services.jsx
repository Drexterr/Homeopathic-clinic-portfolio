import React from 'react';
import { FaHeartbeat, FaAllergies, FaLungs, FaLeaf, FaShieldAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineFaceUnlock } from "react-icons/md";
import { GiStomach } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { SiGoogledataproc } from "react-icons/si";



const treatments = [
  {logo: <FaHeartbeat/>, title: 'Chronic Diseases', description: 'A chronic disease is a long-lasting condition requiring ongoing management.' },
  {logo: <FaAllergies />, title: 'Allergies', description: 'Allergies are immune reactions to substances like pollen, food, or pet dander.' },
  {logo: <MdOutlineFaceUnlock />, title: 'Skin Conditions', description: 'Skin conditions affect the skin\'s appearance, texture, or function.' },
  {logo: <FaLungs />, title: 'Respiratory Issues', description: 'Respiratory issues affect the lungs and airways, causing difficulty in breathing.' },
  {logo: <GiStomach />, title: 'Digestive Disorders', description: 'Digestive disorders affect the tract, causing pain, bloating, or irregular bowel movements.' },
  {logo: <RiMentalHealthFill />, title: 'Mental Health', description: 'Mental health encompasses emotional and psychological well-being.' },
];

const Steps = ({step, title, description}) => (
<div className='bg-white p-5 h-fit w-fit rounded-lg'>
      <h3 className='text-slate-600 text-lg mb-5' >{step}</h3>
      <h1 className='text-slate-800 text-2xl mb-3 font-normal'>{title}</h1>
      <h2 className='text-slate-600 text-base '>{description}</h2>
    </div>
);

const KeyServiceCard = ({icon, title, description}) => (
<div>
   <div className='text-4xl text-green-600 mb-3'> {icon}</div>
   <h1 className='font-semibold text-slate-800 text-xl'>{title}</h1>
    <p className='mt-2'>{description}</p>
    </div>
);

const TreatmentCard = ({logo, title, description }) => (
  <div className='bg-green-200 w-96 h-full flex p-5 rounded-lg'>
    <div className='w-fit my-auto text-4xl p-8 text-green-600'>{logo}<div/></div>
    <div className='max-w-2xl'>
      <h1 className='text-slate-800 font-semibold text-xl mb-4'>{title}</h1>
      <p className='text-slate-600'>{description}</p>
    </div>
    
  </div>
);

const Questions = ({title, description}) => (
  <div><h2 className='mt-10 text-2xl text-slate-800 font-medium'>{title}</h2>
  <h3 className='mt-4 text-slate-700'>{description}</h3>
 <hr className='border-t border-gray-200 mt-6 ' /></div>
);

const Services = () => (
  <div>
    <div className='text-center m-20 py-14'>
      <h1 className='text-6xl font-bold max-w-2xl mx-auto text-slate-800'>Holistic Homeopathic Services</h1>
      <p className='max-w-3xl text-xl text-slate-600 mt-10 mx-auto'>
        Welcome to the Services page of Shree Sheetalnath Homeo Clinic. Explore the natural and holistic treatments offered by Dr. Roshan Banthia to enhance your wellbeing.
      </p>
    </div>
    <div className='py-24'>
      <h1 className='text-center text-4xl text-slate-800 font-semibold'>Our Treatment Categories</h1>
      <div className='grid justify-center gap-10 justify-items-center mx-10 p-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
    </div>
<div className='flex m-24'>
  <div className='text-5xl text-slate-800 max-w-lg '>
Key Homeopathic Services
  </div>
  <div className='grid grid-cols-2 justify-center grid-rows-2 gap-16 '>
  <KeyServiceCard icon={<FaUserDoctor />} title="Personalized Treatment Plans" description= "Tailored homeopathic solutions designed to meet individual health needs."/>
  <KeyServiceCard icon={<FaLeaf />} title='Natural Remedies' description= "Utilizing natural substances to stimulate the body's healing processes." />
  <KeyServiceCard icon={<SiGoogledataproc />} title='Holistic Approach' description= 'Focusing on the whole person, not just symptoms, for comprehensive care.'/>
  <KeyServiceCard icon={<FaShieldAlt />} title='Personalized Treatment Plans' description= 'Strategies to maintain health and prevent illness using homeopathy.'/>
  </div>
</div>
<div  className='bg-green-100 px-36 pt-20'>
  <div className='max-w-lg '>
  <h3 className=  'text-green-600 text-lg mb-7'>Booking Process</h3>
  <h1 className='text-4xl text-slate-800 font-semibold mb-7'>How to Get Started with Our Homeopathic Treatments</h1>
  <h2 className='text-lg text-slate-600'>Follow these simple steps to begin your journey towards holistic healing with Dr. Bharat Jain.</h2></div>
  <div className='grid grid-cols-3 mt-14 gap-5'>
<Steps step ="Step 1" title = "Schedule a Consultation" description="Book an appointment online or call us to schedule a consultation with Dr. Bharat Jain."/>
<Steps step ="Step 2" title = "Initial Assessment" description="Undergo a thorough assessment to understand your health concerns and medical history."/>
<Steps step ="Step 3" title = "Receive a Treatment Plan" description="Get a personalized homeopathic treatment plan tailored to your specific needs."/>   
  </div>
<div className='py-36 px-16'>

  <h1 className='text-center text-3xl text-slate-800 font-semibold mb-16'>Homeopathic Treatment FAQs</h1>
 <Questions title="What is Homeopathy?" description="Homeopathy is a natural form of medicine that uses highly diluted substances to stimulate the body's healing abilities."/>
 <Questions title="How does Homeopathy work?" description="Homeopathy works on the principle of 'like cures like', using substances that cause symptoms in a healthy person to treat similar symptoms in a sick person."/>
 <Questions title="Is Homeopathy safe?" description="Yes, homeopathic treatments are generally safe and free from side effects when prescribed by a qualified practitioner."/>
  </div>  
 </div>  
<div className='p-28 max-w-4xl '>
  <h1 className='text-3xl font-semibold text-slate-800'>Contact Us</h1>
  <h2 className='mt-5 text-slate-600 text-lg'>Reach out to Shree Sheetalnath Homeo Clinic for appointments or inquiries. We are here to assist you with your Homeopathic treatment needs.</h2>
<h2 className='text-slate-600 flex mt-6 text-base'> <IoCallOutline  className='text-xl mx-2 text-green-500 my-auto'/> +91 9782015573</h2>
<h2 className='text-slate-600 flex text-base'> <IoMailOutline className='text-xl mx-2 text-green-500 my-auto'/>dr.roshanbanthia@gmail.com</h2>
</div>
</div>  
);

export default Services;
