const sgMail = require('@sendgrid/mail')

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    console.log("Sendgrid API Key retrieved");


    const acceptedMSG_ADO = {
        to: "torcatobvaz@gmail.com", //replace with adopter user email
        from: "swipet.dev@gmail.com",
        subject: "Your Pet Adoption Application was Accepted",
        text: "Congratulations! Please pick up your new pet at the Shelter",
        html: "<strong>You have helped find a new home, thank you! </strong>",
      };

      console.log(sgMail);

      sgMail
      .send(acceptedMSG_ADO)
      .then(() => {}, (error: { response: { body: any; }; }) => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      });