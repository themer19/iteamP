import React, { useState } from 'react';

const Reclamation= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    phoneBrand: '',
    phoneModel: '',
    duration: '',
    coverageType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec succès ! Données :', formData);
    // Vous pouvez ajouter ici la logique pour envoyer les données du formulaire à votre backend ou pour les traiter autrement.
  };

  return (
    <div className="insurance-form-container">
      <h2>Passé  Réclamation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nom Complet:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Numéro de Téléphone:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneBrand">Marque du Téléphone:</label>
          <input
            type="text"
            id="phoneBrand"
            name="phoneBrand"
            value={formData.phoneBrand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneModel">Modèle du Téléphone:</label>
          <input
            type="text"
            id="phoneModel"
            name="phoneModel"
            value={formData.phoneModel}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="coverageType">Type de Couverture:</label>
          <select
            id="coverageType"
            name="coverageType"
            value={formData.coverageType}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner le type de accident </option>
            <option value="accidental">Accidentelle</option>
            <option value="theft">Vol</option>
          </select>
        </div>
        <button type="submit">Souscrire</button>
      </form>
    </div>
  );
};




export default Reclamation;
