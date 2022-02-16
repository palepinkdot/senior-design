

export const MailTemplates = () => {

  const acceptedMSG_ADO = {
    to: "torcatobvaz@gmail.com", //replace with adopter user email
    from: "swipet.dev@gmail.com",
    subject: "Your Pet Adoption Application was Accepted",
    text: "Congratulations! Please pick up your new pet at the Shelter",
    html: "<strong>You have helped find a new home, thank you! </strong>",
  };

  const pendingMSG_ADO = {
    to: "torcatobvaz@gmail.com", //replace with adopter user email
    from: "swipet.dev@gmail.com",
    subject: "Your Pet Adoption Application is Pending",
    text: "Hang on while the shelter reviews your pet adoption application",
    html: "<strong>Thank you!</strong>",
  };

  const rejectedMSG_ADO = {
    to: "torcatobvaz@gmail.com", //replace with adopter user email
    from: "swipet.dev@gmail.com",
    subject: "Your Pet Adoption Application was Rejected",
    text: "We apologize to inform you that your pet adoption application has been rejected by the shelter.",
    html: "<strong>Your search does not have to end here!</strong>",
  };

  const appReceivedMSG_ORG = {
    to: "torcatobvaz@gmail.com", //replace with org/shelter email
    from: "swipet.dev@gmail.com",
    subject: "Adopeter has Requested to Adopt a Pet",
    text: "Good news! An adopter is interested in adopting an animal from your shelter. Please login into swipet and review the application",
    html: "<strong>Thank you!</strong>",
  };
};

/* 
  Here are the templates we can use in our application. 
  Example of how to send mail using sendgrid:

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    sgMail
        .send(acceptedMSG)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[1].headers)
        })
        .catch((error) => {
            console.error(error)
        })

    */
