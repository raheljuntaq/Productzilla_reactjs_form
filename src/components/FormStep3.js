import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styles from './FormStep3.module.css';

const FormStep3 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    if (data.password === data.confirmPassword) {
      localStorage.setItem('step3', JSON.stringify(data));
      navigate('/welcome');
    } else {
      alert("Password dan Confirm Password harus sama!");
    }
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <br />
      <input {...register("password")} type="password" className={styles.input} placeholder="Password" />
      <input {...register("confirmPassword")} type="password" className={styles.input} placeholder="Confirm Password" />
      <input className={styles.input} type="submit" />
    </form>
  );
};

export default FormStep3;
