import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Users</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // Map data to match the UserProps structure
    const users: UserProps[] = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
    }));

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);

    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;
