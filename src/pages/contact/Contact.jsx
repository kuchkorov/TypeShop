import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactItems from "./ContactItems";
import { DataContact } from "./DataContact";

export default function Contact() {
  // console.log(DataContact);
  return (
    <>
      <Header />
      <main id='main' className='py-3'>
        <section id='contact' className='contact'>
          {DataContact?.map((value) => {
            return <ContactItems key={value.id} {...value} />;
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
