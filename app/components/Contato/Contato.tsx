// "use client";

// import { useState } from "react";
// import styles from "./Contato.module.css";

// type FormStatus = "idle" | "loading" | "success" | "error";

// const Contato = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState<FormStatus>("idle");
//   const [feedbackMessage, setFeedbackMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, phone, message }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus("success");
//         setFeedbackMessage(
//           "Mensagem enviada com sucesso! Entraremos em contato em breve."
//         );
//         // Limpa o formulário
//         setName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//       } else {
//         setStatus("error");
//         setFeedbackMessage(data.error || "Ocorreu um erro. Tente novamente.");
//       }
//     } catch (error) {
//       setStatus("error");
//       setFeedbackMessage(
//         "Ocorreu um erro na comunicação. Verifique sua conexão."
//       );
//     }
//   };

//   return (
//     <div className={styles.contatoContainer} id="contato">
//       <div className={styles.textWrapper}>
//         <h2 className={styles.titulo}>Fale Conosco</h2>
//         <p className={styles.subtitulo}>
//           Tem alguma dúvida ou gostaria de um atendimento personalizado?
//           Preencha o formulário e nossa equipe entrará em contato.
//         </p>
//       </div>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Nome Completo</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="phone">Telefone (Opcional)</label>
//           <input
//             type="tel"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="message">Mensagem</label>
//           <textarea
//             id="message"
//             rows={5}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className={styles.submitButton}
//           disabled={status === "loading"}
//         >
//           {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
//         </button>

//         {status === "success" && (
//           <p className={styles.feedbackSuccess}>{feedbackMessage}</p>
//         )}
//         {status === "error" && (
//           <p className={styles.feedbackError}>{feedbackMessage}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Contato;
