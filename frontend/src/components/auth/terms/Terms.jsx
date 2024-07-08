// src/components/Auth/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.container}>
      <h1>Términos y Condiciones</h1>
      <p>Última actualización: [Fecha de actualización]</p>
      
      <h2>1. Aceptación de los Términos</h2>
      <p>Al acceder y utilizar esta aplicación, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de los términos, no debes usar esta aplicación.</p>
      
      <h2>2. Registro de Usuario</h2>
      <p>Para utilizar ciertas funcionalidades de la aplicación, deberás registrarte proporcionando información veraz y completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</p>
      
      <h2>3. Uso de la Aplicación</h2>
      <p>Te comprometes a utilizar la aplicación de manera legal y respetuosa. No debes utilizar la aplicación para:</p>
      <ul>
        <li>Enviar contenido ofensivo o inapropiado.</li>
        <li>Realizar actividades ilegales o no autorizadas.</li>
        <li>Intentar hackear o comprometer la seguridad de la aplicación.</li>
      </ul>
      
      <h2>4. Propiedad Intelectual</h2>
      <p>Todo el contenido de esta aplicación, incluyendo pero no limitado a textos, gráficos, logotipos e imágenes, es propiedad de [Nombre de tu Empresa] o sus licenciantes y está protegido por las leyes de propiedad intelectual.</p>
      
      <h2>5. Modificaciones a los Términos</h2>
      <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en la aplicación. Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier cambio.</p>
      
      <h2>6. Terminación</h2>
      <p>Podemos suspender o terminar tu acceso a la aplicación en cualquier momento y por cualquier motivo, sin previo aviso.</p>
      
      <h2>7. Limitación de Responsabilidad</h2>
      <p>No seremos responsables por cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de la aplicación.</p>
      
      <h2>8. Ley Aplicable</h2>
      <p>Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de [Tu País/Estado], sin dar efecto a sus disposiciones sobre conflicto de leyes.</p>
      
      <h2>9. Contacto</h2>
      <p>Si tienes alguna pregunta sobre estos términos y condiciones, puedes contactarnos a través de [Información de Contacto].</p>
      
      <Link to="/auth/signup" className={styles.backLink}>Volver al Registro</Link>
    </div>
  );
};

export default Terms;
