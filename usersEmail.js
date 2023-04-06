let emailApp = {
    mailbox: {
      gmail: {
        inbox: [
          {
            from: "example1@example.com",
            to: ["you@example.com"],
            subject: "Hi! This is my subject",
            body: "This is also the body email.",
          },
  
          {
            from: "example2@example.com",
            to: ["you@example.com"],
            subject: "Another subject",
            body: "Another body email.",
          },
        ],
        drafts: [
           {
            to: "person@person.com",
            subject: "A Draft email!",
            body: "just checking in",
          },
      ],
        sent: [
          
             {
                to: "example3@example.com",
                subject: "RE: Something Important",
                body: "Thanks for the email!",
            },
          
        ],
        Contacts: [
          
             {
                name: "John",
                email: "John@example.com",
            },
          
        ],
        allmail: [],
      },
    },
  };

   // Instructions
  for(let allMailBoxes in emailApp.mailbox.gmail){
    console.log(allMailBoxes);
  }

  let inboxEmails = emailApp.mailbox.gmail.inbox;
  console.log(inboxEmails);

  console.log(emailApp.mailbox.gmail.inbox[1].body);

emailApp.mailbox.gmail.sent[0].sentcheck = "true";
console.log(emailApp.mailbox.gmail.sent[0].sentcheck);

emailApp.mailbox.gmail.drafts.push({
    to: "Dear friend",
    subject: "Miss ya!",
    body: "We should have a dinner date soon!",
  });


  console.log(emailApp.mailbox.gmail.drafts[1])

