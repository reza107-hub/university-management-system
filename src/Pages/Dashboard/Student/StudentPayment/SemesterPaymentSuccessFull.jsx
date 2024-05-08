import { useParams } from "react-router";


const SemesterPaymentSuccessFull = () => {
    const { trans_id } = useParams()
    return (
      <div className="pt-[10%] text-center">
        <p className="text-primary text-xl font-bold">
          Your semester payment has been successful
        </p>
  
        <p className="pt-5 ">
          Your Payment Transaction Id{' '}
          <span className="font-semibold text-primary">{trans_id}</span>
        </p>
        
      </div>
    )
};

export default SemesterPaymentSuccessFull;