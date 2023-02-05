import React from "react";
import { MedicalCard, MedicalRecords, UserDetailRecord } from "../componenets";

const MedicalRecordPage = () => {
  return (
    <div className="w-[100vw] p-16 ">
      <UserDetailRecord />
      <div className="flex">
        <MedicalCard />
        <MedicalCard />
      </div>
    </div>
  );
};

export default MedicalRecordPage;
