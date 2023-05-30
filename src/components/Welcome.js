import React from 'react';

const Welcome = () => {
  const step1 = JSON.parse(localStorage.getItem('step1'));
  const step2 = JSON.parse(localStorage.getItem('step2'));
  const step3 = JSON.parse(localStorage.getItem('step3'));

  return (
    <div>
      <h1>Selamat Datang, {step1.name}!</h1>
      <h2>Informasi Anda:</h2>
      <ul>
        <li>Email           : {step1.email}</li>
        <li>No. HP          : {step1.phone}</li>
        <li>Pilihan Bootcamp: {step1.bootcamp}</li>
        <li>Tanggal Lahir   : {step2.dateOfBirth}</li>
        <li>Tempat Lahir    : {step2.placeOfBirth}</li>
        <li>Alamat          : {step2.address}</li>
      </ul>

      <br /> <h2>Terima Kasih telah Mendaftar :)</h2>
    </div>

  );
};

export default Welcome;
