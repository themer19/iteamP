import React, { useState } from 'react';
import { FaIdCard, FaUser, FaImage, FaUserTag } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import axios from 'axios';

function Demander_c() {
    
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom_utilisateur,setNom_utilisateur] = useState('');
    const [telephone, setTelephone] = useState('');
    const [carte_identite, setCarte_identite] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    // Gestionnaire d'événements pour soumettre le formulaire
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { v4: uuid } = require('uuid');
      const userId = uuid();
      console.log(userId);
        const response =await axios.post('http://localhost:3000/api/user/d_user', 
        {
          "_id": userId,
          "nom": nom,
          "prenom":prenom,
          "nom_utilisateur":nom_utilisateur,
          "telephone":telephone,
          "email":email,
          "carte_identite" :carte_identite,
          "image": image
          
        });
        console.log('Réponse de l\'API:', response.data);

        const emailboite =await axios.post('http://localhost:3000/api/boite', 
        {
          "_id": userId,
          "username":nom_utilisateur,
          "email":email,
          "text" :"Demander de creation de compte",
          
          
        });
        console.log('Réponse de l\'API:', response.data);
    
        // Réinitialiser les champs du formulaire après soumission
        setNom('');
        setPrenom('');
        setNom_utilisateur('');
        setTelephone('');
        setCarte_identite('');
        setEmail('');
        setImage(null);
      
    };
    const handleImageChange = (event) => {
        const fichier = event.target.files[0];
        setImage(fichier);
      };
    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <div id="content">
                                        <div className="midde_cont">
                                            <div className="container-fluid">
                                                <div className="row column_title">
                                                    <div className="col-md-12">
                                                        <div className="page_title">
                                                            <h2>Envoyez une demande <small>( vérifier toujours votre donnée)</small></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="white_shd full margin_bottom_30">
                                                            <div className="full graph_head">
                                                                <div className="heading1 margin_0">
                                                                    <h2><i className="fa fa-file-text-o" /> Formulaire </h2>
                                                                </div>
                                                            </div>

                                                           
                                                                
                                                                    <div className="col">
                                                                        <label htmlFor="nom">
                                                                            <FaUser /> Nom :
                                                                            <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} className="form-control" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label htmlFor="prenom">
                                                                            <FaUser /> Prénom :
                                                                            <input type="text" id="prenom" name="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="form-control" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label htmlFor="username">
                                                                            <FaUserTag /> Nom d'utilisateur :
                                                                            <input type="text" id="username" name="username" value={nom_utilisateur} onChange={(e) => setNom_utilisateur(e.target.value)} className="form-control" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label htmlFor="telephone">
                                                                            <BsFillTelephoneFill /> Téléphone :
                                                                            <input type="number" id="telephone" name="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="form-control" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label htmlFor="carte_identite">
                                                                            <FaIdCard /> Numéro de la carte d'identité :
                                                                            <input type="number" id="carte_identite" name="carte_identite" value={carte_identite} onChange={(e) => setCarte_identite(e.target.value)} className="form-control" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label htmlFor="email">
                                                                            <MdEmail /> Email :
                                                                            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label htmlFor="image">
                                                                            <FaImage /> Image :
                                                                            <input type="file" accept="image/*" onChange={event => handleImageChange(event)} className="form-control-file" />
                                                                        </label>
                                                                    </div>
                                                               
                                                                <button type="submit" onClick={handleSubmit} className="btn btn-success">Envoyer</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demander_c;
