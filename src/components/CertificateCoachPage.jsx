import React from "react";


const CertificateCoachPage = () => {
return (
<div id="Certificates" className="mt-14 sm:w-4/5 sm:m-auto sm:mt-12">
    <p id="CertificateTitle" className="text-xl font-bold text-[#4F4F4F] inline-block">
        <img className="inline-block mr-2" src="src/assets/images/Certificate.png" alt="Certificate" />
        Certificates
    </p>
    <p className="font-bold text-[#B9B9B9] inline-block float-right cursor-pointer"><img className="inline-block mr-1 mb-1" src="src/assets/images/SmallPen.svg" alt="Pen" />Edit</p>
    <div className=" h-0.5 w-full bg-[#D9D9D9] inline-block"></div>

    <div id="Corrects" className=" mt-10 flex justify-between sm:flex-wrap sm:w-full">
        <img className="inline-block mr-2 sm:block sm:m-auto sm:mb-10" src="src/assets/images/CorrectCertificate.png" alt="Certificates" />
        <img className="inline-block mr-2 sm:block sm:m-auto sm:mb-10" src="src/assets/images/CorrectCertificate.png" alt="Certificates" />
        <img className="inline-block mr-2 sm:block sm:m-auto sm:mb-10" src="src/assets/images/CorrectCertificate.png" alt="Certificates" />
    </div>
</div>
);
};

export default CertificateCoachPage;