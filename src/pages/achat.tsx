import { useState } from "react";

export default function Achat() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = { nom, prenom, email };
    const response = await fetch("https://api.recif.app/api/submitFormAchat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      //   console.log("envoie : " + response.ok);
      setPrenom("");
      setNom("");
      setEmail("");
      // Le formulaire a été envoyé avec succès
      // Afficher un message de confirmation ou rediriger l'utilisateur
    } else {
      // Il y a eu une erreur lors de l'envoi du formulaire
      // Afficher un message d'erreur ou gérer l'erreur d'une autre manière
    }
  };

  return (
    <>
      <div id="contact" className="bg-slate-400">
        <div className="container mx-auto">
          <div className="py-20">
            <h3 className="text-4xl mb-5 moret-bold px-7 sm:px-2">Achat :</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row py-2">
                <div className="flex flex-col w-full sm:w-1/2 px-7 sm:px-2">
                  <label>Nom :</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="mt-3 p-3 rounded-lg"
                    required
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2 px-7 sm:px-2">
                  <label>Prénom :</label>
                  <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    className="mt-3 p-3 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row py-2">
                <div className="flex flex-col w-full sm:w-1/2 px-7 sm:px-2">
                  <label>Email :</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-3 p-3 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="px-7 sm:px-2">
                <button
                  type="submit"
                  className="my-4 px-4 py-2 bg-[#2E7265] text-white shadow-lg"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
