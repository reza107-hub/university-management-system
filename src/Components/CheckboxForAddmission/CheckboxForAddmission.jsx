import { useState } from "react";
import { Link } from "react-router-dom";

const CheckboxForAddmission = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10 h-screen">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="text-sm">I have read all information</span>
      </label>

      <Link to="/getAdmission/admission-form">
        <button
          className={`mt-4 px-4 py-2 btn-primary ${
            isChecked ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isChecked}
        >
          Start Admission
        </button>
      </Link>
    </div>
  );
};

export default CheckboxForAddmission;
