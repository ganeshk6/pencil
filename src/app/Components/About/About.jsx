import React from "react";
import Style from './About.module.css'

const About = () => {
  return (
    <>
      <div className={Style.about} >
        <div>
          <h1>About Us</h1>
        </div>
        <div className={Style.jobTerm}>
          <p style={{color: "red"}}>जॉब में क्या करना पड़ता है ?</p>
          <p>
            अगर आप घर बैठे जॉब करना चाहते हैं तो आपके लिए वेस्ट जॉब है, यह जॉब
            महिला/पुरुष, मैरिड / अनमैरिड कोई भी कर सकता है। इस जॉब में आपको
            पेंसिल पैकिंग का काम करना होता है,कंपनी से आपको खाली बॉक्स और पेंसिल
            आपके घर तक डिलीवरी कर दी जाएगी और आपको पेंसिल पैकिंग घर बैठे करना
            होता है। एक खाली डिब्बे में आपको 10 पीस पेंसिल भरना होता है, एक डि
            ब्बे भरने का ₹6 कंपनी से मिलता है। इसी तरीके का कंपनी से आपको रबर,
            कटर, पेन और अन्य तरह का प्रोडक्ट आपको पैक करने के लिए कंपनी से दिया
            जाता है।यह जॉब करके आप आसानी से महीने का 25000 से ₹30000 इनकम कर
            सकते हैं।
          </p>
        </div>
          <div>
            <h1>Terms and Conditions</h1>
          </div>
        <div className={Style.termand}>
            <p>
              <span style={{fontWeight: "bold", marginRight: "0.5rem", color: "red"}}>Step 1:</span>
              Natraj Pencil Packing Jobs 2022: Both Male and Female candidates
              can apply for this 2022 Job, the minimum age for this has been
              fixed as 18 years and the maximum is No limit. You must check its
              official notification once before applying according to your post
            </p>
            <p>
              <span style={{fontWeight: "bold", marginRight: "0.5rem", color: "red"}}>Step 2:</span>
              NCandidates should pay the application fees for all candidates-
              Rs. 620/- ( Fee). Pay the application fee through using a Paytm/
              PhonePe/ Googal Pay/ Debit card/ Credit card/ Internet Banking etc
            </p>
        </div>
      </div>
    </>
  );
};

export default About;
