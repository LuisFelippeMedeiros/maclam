// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // Instancia o cliente do Resend com a chave de API do arquivo .env.local
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, message } = await request.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Nome, e-mail e mensagem são obrigatórios." },
//         { status: 400 }
//       );
//     }

//     const { data, error } = await resend.emails.send({
//       from: "Contato Site <onboarding@resend.dev>", // E-mail de envio (verificado no Resend)
//       to: ["emaildestinatario@exemplo.com"], // <<< COLOQUE AQUI O E-MAIL DO SEU CLIENTE
//       subject: `Nova mensagem de ${name} pelo site`,
//       replyTo: email, // O campo 'reply_to' é preenchido com o email do remetente
//       html: `
//         <h1>Nova mensagem do site Grupo Maclam</h1>
//         <p><strong>Nome:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
//         <hr>
//         <p><strong>Mensagem:</strong></p>
//         <p>${message.replace(/\n/g, "<br>")}</p>
//       `,
//     });

//     if (error) {
//       console.error({ error });
//       return NextResponse.json(
//         { error: "Erro ao enviar o e-mail." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ message: "E-mail enviado com sucesso!", data });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Ocorreu um erro inesperado." },
//       { status: 500 }
//     );
//   }
// }
