import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md shadow-md p-4 bg-white">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
