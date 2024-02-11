// import { Link, useNavigate, useParams } from "react-router-dom";
// import AdmissionRequestsLists from "../../../../Components/AdmissionRequestsLists/AdmissionRequestsLists";
// import UserList from "../../../../Components/UserList/UserList";
// import Swal from "sweetalert2";
// import { useState } from "react";
// import useAxios from "../../../../Hooks/useAxios";

const AdmissionDetails = () => {
  // const navigate = useNavigate();
  // const [waiverNumber, setWaiverNumber] = useState();
  // const [axiosCreate] = useAxios();
  // const { email } = useParams();
  // const [users, refetch] = UserList();
  // const [lists] = AdmissionRequestsLists();
  // const details = lists.find((list) => list?.email === email);
  // const user = users.find((user) => user.email === details.email);

  // const downloadImage = () => {
  //   const link = document.createElement("a");
  //   link.href = details?.image;
  //   link.target = "blank";
  //   link.download = "downloaded_image.jpg";
  //   link.click();
  // };

  // const assignWaiver = () => {
  //   Swal.fire({
  //     title: "Enter Waiver Number:",
  //     input: "number",
  //     showCancelButton: true,
  //     confirmButtonText: "Approve",
  //     cancelButtonText: "Cancel",
  //     preConfirm: (number) => {
  //       // Set the entered number to the state
  //       setWaiverNumber(number);
  //     },
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const updatedDetails = { ...details, waiverNumber, userId: user?._id };

  //       axiosCreate
  //         .patch(`/users/${updatedDetails.userId}`)
  //         .then((response) => {
  //           if (response.data.matchedCount > 0) {
  //             axiosCreate.post(`/students`, updatedDetails).then((response) => {
  //               if (response.data.insertedId) {
  //                 Swal.fire({
  //                   position: "top-end",
  //                   icon: "success",
  //                   title: `${updatedDetails.name.firstName} is an Student Now!`,
  //                   showConfirmButton: false,
  //                   timer: 1500,
  //                 });
  //                 refetch();
  //                 navigate("/dashboard/admission-requests-lists");
  //               }
  //             });
  //           }
  //         });
  //     }
  //   });
  // };

  return (
    <div></div>
    // <div className="w-4/5 mx-auto">
    //   <div className="flex justify-between">
    //     <div>
    //       <img className="h-48" src={details?.image} alt="" />
    //       {details?.image && (
    //         <button
    //           onClick={downloadImage}
    //           className="mt-3 btn-primary text-white p-2 text-xs"
    //         >
    //           Download Photo
    //         </button>
    //       )}
    //     </div>
    //     <div>
    //       <button onClick={assignWaiver} className="btn-primary">
    //         Approve
    //       </button>
    //     </div>
    //   </div>
    //   <p className="pt-5">
    //     Name:{" "}
    //     <span className="font-bold">
    //       {details?.name?.firstName + " " + details?.name?.lastName}
    //     </span>
    //   </p>
    //   <p className="pt-5">
    //     Batch: <span className="font-bold">{details?.batchNumber}</span>
    //   </p>
    //   <p className="pt-5">
    //     Father Name: <span className="font-bold">{details?.fatherName}</span>
    //   </p>
    //   <p className="pt-5">
    //     Father Occupation:{" "}
    //     <span className="font-bold">{details?.fatherOccupation}</span>
    //   </p>
    //   <p className="pt-5">
    //     Mother Name: <span className="font-bold">{details?.motherName}</span>
    //   </p>

    //   <p className="pt-5">
    //     Mother Occupation:{" "}
    //     <span className="font-bold">{details?.motherOccupation}</span>
    //   </p>
    //   <p className="pt-5">
    //     Present Guardian Name:{" "}
    //     <span className="font-bold">{details?.presentGuardianName}</span>
    //   </p>
    //   <p className="pt-5">
    //     Present Guardian Contact No:{" "}
    //     <span className="font-bold">{details?.presentGuardianContact}</span>
    //   </p>
    //   <p className="pt-5">
    //     Date of Birth: <span className="font-bold">{details?.dateOfBirth}</span>
    //   </p>
    //   <p className="pt-5">
    //     Gender: <span className="font-bold">{details?.gender}</span>
    //   </p>
    //   <p className="pt-5">
    //     Contact Number:{" "}
    //     <span className="font-bold">{details?.contactNumber}</span>
    //   </p>
    //   <p className="pt-5">
    //     email: <span className="font-bold">{details?.email}</span>
    //   </p>
    //   <p className="pt-5">
    //     Present Address:{" "}
    //     <span className="font-bold">{details?.presentAddress}</span>
    //   </p>
    //   <p className="pt-5">
    //     Permanent Address:{" "}
    //     <span className="font-bold">{details?.permanentAddress}</span>
    //   </p>
    //   <p className="pt-5">
    //     Blood Group: <span className="font-bold">{details?.bloodGroup}</span>
    //   </p>
    //   <p className="pt-5">
    //     Age: <span className="font-bold">{details?.age}</span>
    //   </p>
    //   <p className="pt-5">
    //     Applied Department:{" "}
    //     <span className="font-bold">{details?.department}</span>
    //   </p>
    //   <p className="pt-5">
    //     Nationality: <span className="font-bold">{details?.nationality}</span>
    //   </p>
    //   <p className="pt-5">
    //     SSC Certificate:{" "}
    //     <span className="font-bold underline">
    //       <Link to={details?.sscCertificate} target="_blank">
    //         See Pdf
    //       </Link>
    //     </span>
    //   </p>
    //   <p className="pt-5">
    //     HSC Certificate:{" "}
    //     <span className="font-bold underline">
    //       <Link to={details?.hscCertificate} target="_blank">
    //         See Pdf
    //       </Link>
    //     </span>
    //   </p>
    // </div>
  );
};

export default AdmissionDetails;
