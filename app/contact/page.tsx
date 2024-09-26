import React from "react";
import { Navigation } from "../components/nav";
import ContactContainer, { SNS } from "../components/contact-page/ContactContainer";
import axios from "axios";

const ContactPage:React.FC = async () => {
  const response = await axios.get(`${process.env.NEXT_API_URL}sns`);
  const responseData = response.data;
  const filteredResponse = responseData.filter((sns: SNS) => sns.show === true);

  return (
    <div className="relative pb-16">
      <Navigation />
      <ContactContainer data={filteredResponse} />
    </div>
  )
};

export default ContactPage;