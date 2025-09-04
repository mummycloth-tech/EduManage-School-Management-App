import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const CardProfile = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">[Placeholder: Profile Title]</h3>
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
        <p>[Placeholder: User Name]</p>
      </div>
      <p>[Placeholder: Profile Details]</p>
    </div>
  );
};

export default CardProfile;