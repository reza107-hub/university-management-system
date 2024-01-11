import UserList from "../Components/UserList/UserList";
import useAuth from "./useAuth";

const usePresentUser = () => {
  const { user } = useAuth();
  const [users, refetch] = UserList();
  const presentUser = users.find(
    (userFromDb) => userFromDb?.email === user?.email
  );
  return [presentUser, refetch];
};

export default usePresentUser;
