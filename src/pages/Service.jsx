import React from 'react';
import './ServiceSection.css'; // Ensure this CSS file is correctly referenced
 // Example import, update or add if necessary

const services = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/488841824/photo/steel-mills.jpg?s=612x612&w=0&k=20&c=ETY77nj7bIu9uyxemv9yonBa5OCJ6yJBaNytuWutrfc=",
    title: "Pre-Engineered Buildings (PEB) - Design and Engineering",
    description: "At Tech Meeco InfraStructure Pvt. Ltd., we pride ourselves on our comprehensive design and engineering services for pre-engineered buildings (PEB). Our approach integrates cutting-edge technology and engineering expertise to develop innovative solutions tailored to meet the unique requirements of each project.",
    features: [
      "Customized Designs: We offer customized PEB designs that cater to the specific needs of industrial, commercial, and institutional applications.",
      "Advanced Technology: Utilizing state-of-the-art software and engineering tools, we ensure precision and efficiency in our design processes.",
      "Experienced Engineers: Our team of skilled engineers brings extensive experience and expertise to every project, ensuring the highest standards of quality and safety."
    ]
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/912174592/photo/modern-pipe-rolling-plant-with-steel-tubes.webp?b=1&s=170667a&w=0&k=20&c=fSCCjrla7SM9EJmb14SRUUNBMBfPY9aX2fRVc-4Wtf4=",
    title: "Pre-Engineered Buildings (PEB) - Fabrication",
    description: "Our fabrication services are at the heart of our pre-engineered building solutions. We leverage advanced machinery and high-tensile steel materials to produce durable and reliable structures.",
    features: [
      "State-of-the-Art Facilities: Our fabrication shops are equipped with modern machinery and tools, ensuring high-quality production.",
      "Precision Manufacturing: We adhere to stringent quality control measures to ensure that every component meets the highest standards.",
      "Scalable Solutions: Our facilities are capable of handling large-scale projects, providing scalability to meet diverse client needs."
    ]
  },
  {
    id: 3,
    image: "https://static.vecteezy.com/system/resources/thumbnails/037/998/342/small_2x/ai-generated-abandoned-industrial-plant-in-the-middle-of-the-forest-with-blue-sky-photo.jpg",
    title: "Pre-Engineered Buildings (PEB) - Installation",
    description: "Tech Meeco Infra Pvt. Ltd. offers efficient and safe installation services for pre-engineered buildings. Our approach minimizes construction time and cost while ensuring structural integrity.",
    features: [
      "Expert Installation Teams: Our installation teams are skilled and experienced, ensuring precise and efficient assembly of PEB structures.",
      "Safety First: We prioritize safety at every step of the installation process, adhering to industry best practices and regulations.",
      "Timely Completion: Our streamlined processes and project management expertise ensure that installations are completed on time and within budget."
    ]
  },
  {
    id: 4,
    image: "https://media.istockphoto.com/id/1185016105/photo/steel-mill-factory-molten-metal-in-vat.jpg?s=612x612&w=0&k=20&c=j-80AaGZ3Z2tXQfzHLaiSfydjgaxE_PxxJPco6JpbjA=",
    title: "Civil Construction",
    description: "We excel in providing comprehensive civil construction services for a wide range of projects, from integrated steel plants to multifaceted building constructions.",
    features: [
      "Large-Scale Projects: We undertake large-scale civil construction projects, delivering high-quality results on time and within budget.",
      "Renovation and Remodeling: Our expertise extends to renovation and remodeling projects, ensuring that existing structures meet modern standards and requirements.",
      "Infrastructure Development: We specialize in developing robust infrastructure for industrial and commercial applications."
    ]
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/666132290/photo/industrial-welder-with-torch.jpg?s=612x612&w=0&k=20&c=D9rDginQVUF_rt-ajYvUz_cgHvoGdCvgqo7wNrcwL5c=",
    title: "Structural Fabrication and Erection",
    description: "Tech Meeco Infra Pvt. Ltd. offers end-to-end structural fabrication and erection services, ensuring that every project is executed with precision and excellence.",
    features: [
      "Comprehensive Fabrication: Our state-of-the-art fabrication facilities produce high-quality structural components tailored to project specifications.",
      "Expert Erection Teams: Our skilled erection teams ensure that structures are assembled safely and efficiently, adhering to all industry standards.",
      "Quality Assurance: We implement rigorous quality control measures throughout the fabrication and erection processes to ensure the highest standards."
    ]
  },
  {
    id: 6,
    image: "https://media.istockphoto.com/id/1314886625/photo/factory-worker-grinding-a-metal-close-up.jpg?s=612x612&w=0&k=20&c=WWzfVLpiIuialDZ0tllOR1tWuuYjE02XBRHmHq0tKoA=",
    title: "Mechanical Contracting",
    description: "Our mechanical contracting services encompass a wide range of capabilities, including material handling, equipment installation, and machining items.",
    features: [
      "Material Handling Solutions: We provide comprehensive material handling solutions, ensuring the efficient movement and storage of materials within industrial facilities.",
      "Equipment Installation: Our expertise includes the installation of complex mechanical systems and equipment, ensuring seamless integration with existing infrastructure.",
      "Machining Services: We offer precision machining services to meet the specific needs of various industrial applications."
    ]
  },
  {
    id: 7,
    image: "https://media.istockphoto.com/id/1180171090/photo/two-metal-workers-operating-a-crane-in-a-steel-factory.jpg?s=612x612&w=0&k=20&c=WkFu8h6UinWtgUm1yxmtcXHfZ3cHnuzX0ZCk7FsxDyU=",
    title: "Material Handling",
    description: "Tech Meeco Infra Pvt. Ltd. delivers advanced material handling solutions designed to optimize efficiency and productivity within industrial facilities.",
    features: [
      "Customized Systems: We design and implement customized material handling systems tailored to the specific needs of our clients.",
      "Advanced Technology: Utilizing the latest technology, we ensure that our solutions enhance operational efficiency and reduce downtime.",
      "Comprehensive Support: From design to implementation and maintenance, we provide comprehensive support to ensure the success of our material handling systems."
    ]
  },
  {
    id: 8,
    image: "https://media.istockphoto.com/id/1401062417/photo/hot-steel-pouring-at-steel-plant-stock-footage-flowing-metal-at-the-foundry-pouring-of-liquid.jpg?s=612x612&w=0&k=20&c=NAFdL8WzB76fET2btRGAKbh3ec6MfTV5XQhfZVq_MBg=",
    title: "Equipment Installation and Machining",
    description: "Our equipment installation and machining services ensure that all mechanical systems are installed and maintained to the highest standards.",
    features: [
      "Precision Installation: We provide precise installation services for a wide range of mechanical equipment, ensuring optimal performance.",
      "Machining Expertise: Our machining services are carried out by skilled professionals using advanced equipment, ensuring high-quality results.",
      "Maintenance and Support: We offer ongoing maintenance and support services to ensure the longevity and reliability of installed equipment."
    ]
  },
  {
    id: 9,
    image: "https://media.istockphoto.com/id/875273138/photo/red-hot-forged-components.jpg?s=612x612&w=0&k=20&c=3TjHkXSOyKdz6kcQy9g-9S3mgc54kOE-AoAs7JXoi1U=",
    title: "Detailed Engineering and CAD Services",
    description: "Tech Meeco Infra Pvt. Ltd. offers detailed engineering and CAD services to support the design and execution of complex projects.",
    features: [
      "Detailed Drawings: We provide detailed engineering drawings and specifications to guide the fabrication and construction processes.",
      "CAD Capabilities: Our CAD services utilize the latest software and technology to create accurate and detailed project designs.",
      "Collaboration and Coordination: We work closely with clients and other stakeholders to ensure that all engineering aspects of the project are seamlessly integrated."
    ]
  },
  {
    id: 10,
    image: "https://media.istockphoto.com/id/1069526610/photo/industrial-metallurgy.jpg?s=612x612&w=0&k=20&c=2kqxBOHbQQHQjvkSNilAmFOod-6GDgvPp_6f4qTp6uc=",
    title: "Turnkey Construction Services",
    description: "Our turnkey construction services provide a comprehensive solution for clients seeking a single point of responsibility for their construction projects.",
    features: [
      "End-to-End Solutions: We manage every aspect of the construction process, from initial design and engineering to final installation and commissioning.",
      "Project Management: Our experienced project managers ensure that all phases of the project are executed efficiently and effectively.",
      "Quality and Safety: We adhere to the highest standards of quality and safety throughout the construction process, ensuring that all projects are completed to the satisfaction of our clients."
    ]
  }
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-cover bg-center" style={{
      background: 'linear-gradient(135deg, #d6e9f5, #e9d6f5, #ffffff)',
    }}>
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-blue-600 text-center md:text-left">Our Services</h1>

      {services.map(service => (
        <div key={service.id} className="flex flex-col md:flex-row mb-8 bg-white bg-opacity-80 p-4 rounded">
          <div className="md:w-1/2 md:pr-4">
            <h2 className="text-xl md:text-2xl font-semibold text-violet-600">{service.title}</h2>
            <p>{service.description}</p>
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="list-disc list-inside">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <img src={service.image} alt={service.title} className="w-full rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;


