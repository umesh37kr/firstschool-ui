import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="container bg-[#fcf9f9] py-5 min-h-full">
        <div className="conatiner block">
          <h1 className="text-cyan-800 text-center text-pretty text-3xl font-semibold">
            Message from the Principal
          </h1>
          <h2 class="my-4 font-bold text-2xl w-full p-2 text-white bg-orange-500 sm:text-4xl ">
            Shivani Gupta
          </h2>
          <p className="text-justify">
            <Image
              src="/principal.jpg"
              alt="principal"
              height={350}
              width={350}
              className="float-left mr-2"
            />
            <strong className="text-heading">
              Learning gives creativity, creativity leads to thinking, Thinking
              provides knowledge, knowledge makes you great.
            </strong>
          </p>
          <br />
          <p className="text-justify text-heading">
            प्रिय अभिभावकों और छात्रों,
            <br /> हमारे विद्यालय में आपका स्वागत है! शिक्षा का असली उद्देश्य
            केवल ज्ञान अर्जित करना नहीं, बल्कि छात्रों के सर्वांगीण विकास को
            सुनिश्चित करना है। हम न केवल शैक्षणिक उत्कृष्टता पर ध्यान केंद्रित
            करते हैं, बल्कि बच्चों के नैतिक, शारीरिक और मानसिक विकास को भी
            प्राथमिकता देते हैं। यह हमारा प्रयास है कि प्रत्येक छात्र यहां से
            आत्मनिर्भर, जिम्मेदार और समाज के प्रति संवेदनशील नागरिक के रूप में
            उभर कर निकले। हमारे शिक्षकों और अभिभावकों का सहयोग हमारी सबसे बड़ी
            ताकत है, और हम एक सुरक्षित और प्रेरणादायक वातावरण प्रदान करने के लिए
            निरंतर प्रयासरत हैं। मुझे पूरा विश्वास है कि हमारे विद्यालय में
            छात्रों को एक उज्ज्वल भविष्य की ओर मार्गदर्शन मिलेगा। <br />
            धन्यवाद!
          </p>
        </div>
        <div className="mt-10">
          <h2 className="bg-cyan-700 text-3xl font-semibold text-white p-2">
            Our Mission & Vission
          </h2>
          <h3 className="font-semibold text-xl text-cyan-700 mt-8">
            <span className="border-b-2 border-orange-500">Our Mission -</span>
          </h3>
          <p className="text-heading text-justify mt-4">
            हमारा मिशन हर विद्यार्थी को एक सशक्त और समग्र शिक्षा प्रदान करना है,
            जो उनके बौद्धिक, नैतिक, और सामाजिक विकास को बढ़ावा दे। हम यह
            सुनिश्चित करते हैं कि हमारे छात्र न केवल शैक्षिक रूप से उत्कृष्ट
            हों, बल्कि उनमें आत्मविश्वास, सृजनात्मकता और नेतृत्व क्षमता का भी
            विकास हो। हमारा उद्देश्य विद्यार्थियों को आज की दुनिया की चुनौतियों
            का सामना करने के लिए तैयार करना, और उन्हें एक जिम्मेदार, संवेदनशील
            और जागरूक नागरिक बनाना है, जो समाज और राष्ट्र की प्रगति में योगदान
            दे सकें।
          </p>

          <h3 className="font-semibold text-xl text-cyan-700 mt-8">
            <span className="border-b-2 border-orange-500">Our Vission -</span>
          </h3>
          <p className="text-heading text-justify mt-4">
            हमारी दृष्टि एक ऐसे शिक्षण संस्थान का निर्माण करना है, जहाँ हर छात्र
            को अपने अद्वितीय कौशल और प्रतिभाओं को विकसित करने का अवसर मिले। हम
            एक ऐसा वातावरण प्रदान करने के लिए प्रतिबद्ध हैं जहाँ शिक्षा न केवल
            ज्ञान प्राप्ति का साधन हो, बल्कि जीवन कौशल, नैतिक मूल्यों, और
            जिम्मेदार नागरिकता की दिशा में भी मार्गदर्शन करे। हमारा उद्देश्य
            विद्यार्थियों को एक ऐसी शिक्षा देना है जो उन्हें आत्मनिर्भर, सृजनशील
            और समाज के प्रति जागरूक बनाये। हम भविष्य के उन नेताओं और जिम्मेदार
            नागरिकों को तैयार करना चाहते हैं, जो अपने ज्ञान और मूल्यों से समाज
            और राष्ट्र का उत्थान कर सकें।
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
