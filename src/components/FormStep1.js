import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styles from './FormStep1.module.css';


const FormStep1 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = data => {
    localStorage.setItem('step1', JSON.stringify(data));
    navigate('/step2');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <br />
        <h2>Isi Data Berikut : </h2>
      <input {...register("name")} type="text" className={styles.input} placeholder="Nama" />
      <input {...register("email")} type="email" className={styles.input} placeholder="Email" />
      <input {...register("phone")} type="tel" className={styles.input} placeholder="No. HP" />
      <div>
        <label>
          <input {...register("bootcamp")} type="radio" value="UI/UX" />
          UI/UX
        </label>
        <label>
          <input {...register("bootcamp")} type="radio" value="Backend Engineer" />
          Backend Engineer
        </label>
        <label>
          <input {...register("bootcamp")} type="radio" value="Frontend Engineer" />
          Frontend Engineer
        </label>
        <label>
          <input {...register("bootcamp")} type="radio" value="Digital Marketing" />
          Digital Marketing
        </label>
      </div>
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default FormStep1;
