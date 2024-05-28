import React, { Component } from 'react';

class Ajouteuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      phoneBrand: '',
      phoneModel: '',
      duration: '',
      coverageType: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec succès ! Données :', this.state);
    // Vous pouvez ajouter ici la logique pour envoyer les données du formulaire à votre backend ou pour les traiter autrement.
  };

  render() {
    return (
      <div className="insurance-form-container">
        <h2>Passé Assurances</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Les éléments du formulaire restent les mêmes */}
        </form>
      </div>
    );
  }
}

export default Ajouteuser;
