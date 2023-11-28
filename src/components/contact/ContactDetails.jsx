import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { HighLightText } from "../utils/HighLightText";

const contacts = [
  {
    id: 1,
    name: "HSR Layout, Bangalore, Karnataka",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "asifmohd1146@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "7460831797",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto w-[400px]">
        <h2 className="text-lg mt-12 mb-8">
          <HighLightText bold={true}>Contact details:</HighLightText>
        </h2>
        <ul className="font-light">
          {contacts.map((contact) => (
            <li className="flex items-center mb-2" key={contact.id}>
              <i className="text-lg  text-gray-500 dark:text-gray-400 mr-4">
                {contact.icon}
              </i>
              <span className="text-md md:text-sm text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
