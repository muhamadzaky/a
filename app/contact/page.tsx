import React, { FC } from 'react';
import ContactContainer from '../components/shared/contact-page/ContactContainer';
import axios from 'axios';

const ContactPage: FC = async () => {
  const response = await axios.get(`${process.env.NEXT_API_URL}sns`);
  const responseData = response.data;
  const filteredResponse = responseData.filter((sns: Model.SNS) => sns.show === true);

  return <ContactContainer data={filteredResponse} />;
};

export default ContactPage;
