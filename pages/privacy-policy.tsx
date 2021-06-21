import { useRouter } from "next/router";
import React from "react";


interface PrivacyProps { }
const Privacy: React.FC<PrivacyProps> = () => {
    const router = useRouter();
    return (
        <>
            <section className=" mx-8 md:mx-16 mb-20  text-gray-600 body-font">
                <p className="mt-2"> TEARMS AND CONDITION</p>

                <p className="mt-2">Last revised: 1st June 2021</p>


                <p className="mt-2">
                    Please read these Terms & Conditions, Privacy Policy and Cookie Policy carefully.
                    They will govern the relationship between, you, the Merchant and the Service,
                    Check Your acceptance of these documents will need to be agreed upon before You can continue to use the Service.

                </p>
                <p className="mt-2">
                    1. Acknowledgement
                    By signing up and using the Service, You agree to abide by and follow the Terms & Conditions,
                    Privacy Policy and Cookie Policy of the Platform and accept any decision made in accordance with these documents as they are displayed here.

               </p>

                <p className="mt-2">
                    Webstocx has its own standing and at times our website may use “we” or “us” to refer our identity. The term “you” refers to the user or viewer of our website
                    Our website may include links to external web sites. These links are provided only to help you find relevant websites, services/products which may interest you.
                    They do not mean we endorse those websites. It is your responsibility to decide whether the services/products on those websites are suitable for you.
                    Webstocx is not responsible for the owners or operators of those website.
               </p>

                <p className="mt-2">
                    The content in our website are general and is subject to change without notice. Use of materials/information on our website is entirely at your own risk and we are not liable for the damages you may suffer
                    We do our best to give you the right information through our website. However, please make sure to contact us or any other experts in the field to make any important decision.


               </p>
                <p className="mt-2">
                    Changes to Terms and Conditions

                    Webstocx may change the above said terms and conditions at any time. You need to check them each time you visit the website.
                    Be aware that you are also bound to the changes made to the terms and conditions

              </p>


                <p className="mt-2">
                    We value the privacy of everyone who visits our website. Protecting your private information is our top priority.
                    By submitting your personal data, you are giving us permission to use it as stated in the policy.

               </p>
                <p className="mt-2">
                    We encourage you to carefully go through the privacy policy before you give any information.

                </p>
                <p className="mt-2">
                    What Does This Privacy Policy Cover?
               </p>

                <p className="mt-2">
                    This privacy policy will explain how we use your personal data and other information when you access our website.
                    This policy does not apply to third party websites that we do not own example, Google, Facebook, Twitter etc.
                    We cannot take responsibility for their privacy policy and practices.
                    All the trademarks on this website belong to us or are licensed by those trademark owners for usage on our website.
                    The trademarks present in our website that are not a property of ColorWhistle e.g.Facebook, are given proper acknowledgement
                    Illegal use of this website may give rise to a claim for damages or be a criminal offence
                    You may not copy (print, store, download), distribute, broadcast, or tamper with any of the content present in the website

                </p>
                <p className="mt-2">
                    performance invoice

               </p>
                <p className="mt-2">
                    Terms and conditon....
               </p>

                <p className="mt-2">
                    The payment will be 100% accepted ...

                </p>
                <p className="mt-2">
                    social media perfomence will be estemated that's not fixed we will provide you analytics details in day to day activity.
                </p>
            </section>

        </>
    );
};

export default Privacy;
