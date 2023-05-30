import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styles from './FormStep2.module.css';

const FormStep2 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = data => {
    localStorage.setItem('step2', JSON.stringify(data));
    navigate('/step3');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <br />
      <input {...register("dateOfBirth")} type="date" className={styles.input} />
      <input {...register("placeOfBirth")} type="text" className={styles.input} placeholder="Tempat Lahir" />
      <input {...register("address")} type="text" className={styles.input} placeholder="Alamat Lengkap" />
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default FormStep2;
