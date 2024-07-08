import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import styles from './SignUp.module.css';
import logo from '../signup/logo.png';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    technologies: '',
    tools: '',
    location: '',
    timezone: ''
  });

  const navigate = useNavigate();// Inicializar useHistory

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(value) || 'La contraseña debe tener al menos 6 caracteres y contener letras y números';
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) || 'Correo electrónico no es válido';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validatePassword(value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    console.log('Form data', data);
    // Simulate API call
    setTimeout(() => {
      if (data.email !== 'already@exists.com') {
        setSubmitSuccess(true);
        setSubmitError(false);
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          role: '',
          technologies: '',
          tools: '',
          location: '',
          timezone: ''
        });
        navigate('/'); // Redirigir a la ruta principal después del registro exitoso
      } else {
        setSubmitSuccess(false);
        setSubmitError(true);
      }
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.h2}> Sign Up</h2>
        <p className= {styles.subtitle} >You can easily sign up from this screen here</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label></label>
            <input
              type="text"
              {...register('firstName', { required: 'Nombre es obligatorio' })}
              className={errors.firstName ? styles.errorInput : ''}
              value={formValues.firstName}
              onChange={handleChange}
              placeholder='First Name'
            />
            {errors.firstName && <p className={styles.errorText}>{errors.firstName.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              placeholder='Last Name'
              type="text"
              {...register('lastName', { required: 'Apellido es obligatorio' })}
              className={errors.lastName ? styles.errorInput : ''}
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className={styles.errorText}>{errors.lastName.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              placeholder='Email'
              type="email"
              {...register('email', { required: 'Correo electrónico es obligatorio', validate: validateEmail })}
              className={errors.email ? styles.errorInput : ''}
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              placeholder='Password'
              type="password"
              {...register('password', { required: 'Contraseña es obligatoria', validate: validatePassword })}
              className={errors.password ? styles.errorInput : ''}
              value={formValues.password}
              onChange={handleChange}
            />
            {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              placeholder='Role'
              type="text"
              {...register('role', { required: 'Rol es obligatorio' })}
              className={errors.role ? styles.errorInput : ''}
              value={formValues.role}
              onChange={handleChange}
            />
            {errors.role && <p className={styles.errorText}>{errors.role.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              type="text"
              {...register('technologies', { required: 'Tecnologías son obligatorias' })}
              className={errors.technologies ? styles.errorInput : ''}
              value={formValues.technologies}
              onChange={handleChange}
              placeholder='Technologies'
            />
            {errors.technologies && <p className={styles.errorText}>{errors.technologies.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              type="text"
              {...register('tools', { required: 'Herramientas son obligatorias' })}
              className={errors.tools ? styles.errorInput : ''}
              value={formValues.tools}
              onChange={handleChange}
              placeholder='Tools'
            />
            {errors.tools && <p className={styles.errorText}>{errors.tools.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              type="text"
              {...register('location', { required: 'Ubicación es obligatoria' })}
              className={errors.location ? styles.errorInput : ''}
              value={formValues.location}
              onChange={handleChange}
              placeholder='Location'
            />
            {errors.location && <p className={styles.errorText}>{errors.location.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label></label>
            <input
              placeholder='Timezone'
              type="text"
              {...register('timezone', { required: 'Zona horaria es obligatoria' })}
              className={errors.timezone ? styles.errorInput : ''}
              value={formValues.timezone}
              onChange={handleChange}
            />
            {errors.timezone && <p className={styles.errorText}>{errors.timezone.message}</p>}
            <div className={styles.foot}><label></label>
          <input type="checkbox" 
          required="required"  
          className={styles.check}       
          /> <p style={{ marginLeft: "5%"}} > I confirm the <a href="/auth/term" className={styles.link}>Terms</a></p>  
      
 
        <div className={styles.but}>
        <button type="submit">Send Application</button>
        </div>
        </div>
          {submitSuccess && <p className={styles.successText}>Registro exitoso!</p>}
          {submitError && <p className={styles.errorText}>Error al registrar. El correo electrónico ya existe.</p>}
        
          </div></form>
      </div>
    </div>
  );
};

export default SignUp;