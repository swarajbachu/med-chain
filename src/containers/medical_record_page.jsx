import React from "react";
import { MedicalCard, MedicalRecords, UserDetailRecord } from "../componenets";

const MedicalRecordPage = () => {
  return (
    <div className="w-[100vw] p-16 ">
      <UserDetailRecord />
      <div className="flex">
        <MedicalCard 
        Desease={"Heart Problem"}
        hospital = {"AIMS"}
        Description = {"Meds"}
        />
        <MedicalCard 
        Desease={"Lungs Problem"}
        hospital = {"AIMS"}
        Description = {"Its because you smoke"}
        />
      </div>
    </div>
  );
};

export default MedicalRecordPage;
