import React from "react";

const ContactMap = () => {
  return (
    <iframe
      title="Google Map"
      src={process.env.NEXT_PUBLIC_API_GOOGLE_MAP}
      width="100%"
      height="480"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default ContactMap;
