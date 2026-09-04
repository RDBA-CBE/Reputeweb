import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_zk3hdzj";
const ADMIN_TEMPLATE_ID = "template_zc74t3r";
const PUBLIC_KEY = "_T89cCaK4SQpnkp0k";
const ADMIN_EMAIL = "psmkduraisamy@gmail.com";

export interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  enquiryType: string;
  product: string;
  quantity: string;
  requiredOrigin: string;
  destination: string;
  specification: string;
}

export async function sendEnquiryEmail(formData: FormData): Promise<void> {
  const adminParams = {
    to_email: ADMIN_EMAIL,
    time: new Date().toLocaleString(),
    ...formData,
  };

  await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, adminParams, PUBLIC_KEY);
}
