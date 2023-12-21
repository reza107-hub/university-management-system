import { useQuery } from "@tanstack/react-query";
import { fetchUrl } from "../../../Components/BaseUrl/fetchUrl";
import UserListsTable from "../../../Components/UserListsTable/UserListsTable";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const AdminList = () => {
  const [axiosCreate] = useAxios()
  const { data: adminList = [], refetch } = useQuery({
    queryKey: "adminList",
    queryFn: async () => {
      const res = await fetch(fetchUrl + "/admin-list");
      return res.json();
    },
  });

  const handleDeleteAdmin = (user)=>{
    axiosCreate.patch(`/users/remove/admin/${user?.userId}`).then(response=>{
      if (response.data) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is removed from admin!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }

  return (
    <div>
      <UserListsTable
        finalUserListWithIfo={adminList}
        givenRole={`user`}
        handleUser={handleDeleteAdmin}/>
    </div>
  );
};

export default AdminList;