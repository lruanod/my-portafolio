const {Router} =require('express');
const nodemailer=require('nodemailer');
const {google}= require('googleapis');
const router = Router();

router.post('/send-email',(req,res)=>{
    const {name,email,phone,message}= req.body;
    
    contentHTML= `
        <h1>Información del contacto</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Correo electrinico: ${email}</li>
            <li>Telefono: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    const CLIENT_ID="931307708404-vfblpp0jjgmdni8vfqiuv1o0r5mhm7p7.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04_vp4BaEwDHgCgYIARAAGAQSNwF-L9IrYFRgGVyrqfRrDuNoXb6NSlDJoI1-2ToSoUxpAxYLqR6LYkOGpprZFiAsBKRdC-k20Kg" 
     
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail(){
        try{
           const accessToken= await oAuth2Client.getAccessToken();
           const transporter= nodemailer.createTransport({
                service:"gmail",
                auth:{
                    type:"OAuth2",
                    user:"luismastersystem@gmail.com",
                    clientId:CLIENT_ID,
                    clientSecret:CLIENT_SECRET,
                    refreshToken:REFRESH_TOKEN,
                    accessToken:accessToken
                }
           });
           const mailOptions={
            from:"Portafolio <luismastersystem@gmail.com>",
            to:"luislocoxcristo@gmail.com",
            subject: "Contacto de portafolio",
            html:contentHTML,
           };
           const result =await transporter.sendMail(mailOptions);
           
           
        } catch (err){
            console.log(err);
        }

        
    }

    sendMail()
    .then((result)=> res.status(200).send("enviado"))
    .catch((error)=> console.log(error.message));

});

module.exports = router;