import Image from "next/image";

import ProjectItem from "./components/ProjectItem";

export default function Home() {
  return (
    <div className="mx-20">
      <div className="mt-10">
     <div className="text-5xl font-bold">
  Alex Lee
</div>
<div className="text-xl font-medium text-gray-400">
  Software Developer
</div>
</div >
      <section className=" mx-20 my-15 scroll-mt-24" id="about">
        I'm a Computer Science graduate from UBC with full-stack and machine learning experience through internships at Boeing and BRP. I enjoy building end-to-end applications that solve real problems, from data pipelines and ML models to interactive web interfaces. Currently seeking software developer roles where I can keep learning and ship things that matter.
      </section>
      <section  className="scroll-mt-24" id="projects">
        <div className="flex">
          <ProjectItem title="TradingCast" 
        description="A full-stack stock analysis platform featuring interactive candlestick charts with technical indicators, an ML-based price prediction model built with PyTorch achieving 40-50% directional accuracy, and multi-stock correlation analysis to support portfolio diversification decisions.." 
        tech={["Next.js", "React.js", "Typescript", "FastAPI", "Pytorch", "Scikit-learn"]}
        year="2026"
        github="https://github.com/alexlee78980/tradingcast"
        images={["/img/tradingCast/Home.png", "/img/tradingCast/Chart.png","/img/tradingCast/Analyze.png",  "/img/tradingCast/Correlation.png" ]}
        demo="www.google.com"
        tagline="An app that visualizes trades, provides trading suggestions, and helps diversify portfolios."
        num={0}
        />
        </div>
         <div  id="projects" className="flex"><ProjectItem title="Animal Classification" 
        description="Built a full-stack application that allows users to classify animals from uploaded images or links into one of 91 categories. Achieved 95.97% accuracy by leveraging deep learning techniques such as transfer learning, fine-tuning, and data augmentation. Developed the frontend with React and backend APIs with Flask to serve the TensorFlow-trained model, enabling a seamless and interactive user experience." 
        tech={["React.js", "Flask", "TensorFlow"]}
        year="2022"
        github="https://github.com/alexlee78980/animal-classification"
        images={["/img/AnimalClassification/Start.png", "/img/AnimalClassification/loading.png","/img/AnimalClassification/end.png" ]}
        demo="www.google.com"
        tagline="Helps users identify animals from the photos they take."
        num={1}
        />
        </div>
        </section>
 {/* <div className="flex"><ProjectItem title="Animal Classification" 
        description="A deep learning model that classifies animal images into one of 91 categories with 95.97% accuracy, built with TensorFlow and deployed as a full-stack web application." 
        tech={["Next.js", "React.js"]}
        year="2020"
        github="https://github.com/alexlee78980"
        demo="www.google.com"
        num={1}
        />
        </div>
         <div className="flex"><ProjectItem title="TradingCast" 
        description="A full-stack stock analysis platform featuring interactive candlestick charts with technical indicators, an ML-based price prediction model built with PyTorch achieving 40-50% directional accuracy, and multi-stock correlation analysis to support portfolio diversification decisions.." 
        tech={["Next.js", "React.js", "Typescript", "FastAPI", "Pytorch", "Scikit-learn"]}
        year="2026"
        github="https://github.com/alexlee78980/tradingcast"
        demo="www.google.com"
        num={0}
        />
        </div> */}
    </div>  
    
  );
}
